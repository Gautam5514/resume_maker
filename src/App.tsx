
import React, { useState } from 'react';
import { DataInput } from './components/DataInput';
import { TemplateSelector } from './components/TemplateSelector';
import { ResumePreview } from './components/ResumePreview';
import { DownloadButton } from './components/DownloadButton';
// import AppHeader from './components/Header';
import AppHeader from './components/Header'



export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    website: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }>;
  skills: Array<{
    id: string;
    category: string;
    items: string[];
  }>;
  projects: Array<{
    id: string;
    name: string;
    description: string;
    technologies: string;
    link?: string;
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
    link?: string;
  }>;
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    website: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: []
};

const App = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState('classic');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-2">
        <div className="text-center mb-8">
          <AppHeader />
          {/* <Header /> */}
          <h1 className="text-4xl mt-16 font-bold text-blue-600 mb-2">Resume Builder</h1>
          <p className="text-blue-500">Create professional, ATS-friendly resumes in minutes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input Form */}
          <div className="space-y-6">
            <TemplateSelector 
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
            <DataInput 
              data={resumeData}
              onChange={setResumeData}
            />
          </div>

          {/* Right Panel - Preview & Download */}
          <div className="space-y-6">
            <div className="flex justify-end">
              <DownloadButton 
                resumeData={resumeData}
                templateId={selectedTemplate}
              />
            </div>
            <ResumePreview 
              data={resumeData}
              templateId={selectedTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
