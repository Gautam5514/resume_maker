import { useState, useEffect, useRef } from 'react';
import {
  Menu, Search, ChevronDown, FileText, CreditCard, Briefcase, User
} from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
  Icon: React.ElementType;
}

const navLinks: NavLink[] = [

  { href: "https://prepx.co", label: "Home", Icon: User }
];

export default function AppHeader(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiToolsHover, setAiToolsHover] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAiToolsHover(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center  gap-2 text-lg font-bold text-blue-600 tracking-tight">
          <img src="/Logo.png" alt="Logo" className="h-9 w-auto" />
        </a>

        {/* Navigation (center) */}
          <nav className="mx-auto hidden md:flex gap-6">
            {navLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-md font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-md transition"
              >
                <Icon className="h-4 w-4 text-blue-500" />
                {label}
              </a>
            ))}
          </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-blue-50 transition"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-blue-600 text-lg font-semibold">
            <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
            
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 text-gray-500 hover:text-blue-600"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md transition text-sm"
            >
              <Icon className="h-4 w-4 text-blue-500" />
              {label}
            </a>
          ))}

          
        </div>
      </div>
    </header>
  );
}
