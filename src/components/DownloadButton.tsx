
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import { ResumeData } from '../App';

interface DownloadButtonProps {
  resumeData: ResumeData;
  templateId: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ resumeData, templateId }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: resumeData.personalInfo.fullName 
      ? `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume`
      : 'Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
    `,
  });

  // Set the print target to the resume preview element
  React.useEffect(() => {
    const resumeElement = document.getElementById('resume-preview');
    if (resumeElement && componentRef.current !== resumeElement) {
      componentRef.current = resumeElement as HTMLDivElement;
    }
  }, []);

  return (
    <Button onClick={handlePrint} className="flex items-center gap-2">
      <Download className="w-4 h-4" />
      Download PDF
    </Button>
  );
};
