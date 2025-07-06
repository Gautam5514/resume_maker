
import React from 'react';
import { ResumeData } from '../App';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { ModernTemplate } from './templates/ModernTemplate';
import { ElegantTemplate } from './templates/ElegantTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { ColorfulTemplate } from './templates/ColorfulTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { BusinessTemplate } from './templates/BusinessTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  templateId: string;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'elegant':
        return <ElegantTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      case 'colorful':
        return <ColorfulTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      case 'business':
        return <BusinessTemplate data={data} />;
      default:
        return <ClassicTemplate data={data} />;
    }
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden shadow-lg bg-white print:border-0 print:shadow-none">
      <div 
        id="resume-preview" 
        className="w-full max-w-[8.5in] mx-auto bg-white print:max-w-none print:mx-0"
        style={{ minHeight: '11in' }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
};
