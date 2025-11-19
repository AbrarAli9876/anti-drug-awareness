import React, { useState } from 'react';
import { aboutContent, developerInfo } from '../data/aboutData';
import { User, Mail, Linkedin, Github, School, X } from 'lucide-react';

const About = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            About Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our Mission & The Developer Behind the Project
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* Section 1: About NashaSeAzaadi */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{aboutContent.title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {aboutContent.description}
          </p>
        </div>

        {/* Section 2: About the Developer */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                
                {/* Left Side - Circular Image (Clickable) */}
                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <div 
                        className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-200 shadow-xl mx-auto md:mx-0 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-red-500"
                        onClick={() => setIsImageOpen(true)}
                        title="Click to expand"
                    >
                        <img 
                            src={developerInfo.image} 
                            alt={developerInfo.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {e.target.src = "https://ui-avatars.com/api/?name=Abrar+Ali&size=300&background=random"}} 
                        />
                    </div>
                    <p className="text-xs text-center mt-2 text-slate-400 md:text-left md:pl-10">(Click to view)</p>
                </div>

                {/* Right Side - Details */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">{developerInfo.name}</h3>
                    <p className="text-sm text-slate-500 mb-6 font-mono font-semibold">Developer & Student</p>
                    
                    <div className="space-y-3 text-slate-700 mb-6">
                        <div className="flex items-center justify-center md:justify-start">
                            <Mail className="w-5 h-5 text-red-500 mr-3 shrink-0"/>
                            <a href={`mailto:${developerInfo.email}`} className="hover:text-red-600 transition-colors break-all">{developerInfo.email}</a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                            <School className="w-5 h-5 text-blue-500 mr-3 shrink-0"/>
                            <span>{developerInfo.college}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-6 mt-2">
                            <a href={developerInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-700 transition-colors font-medium">
                                <Linkedin className="w-5 h-5 text-blue-600 mr-2"/> LinkedIn
                            </a>
                            <a href={developerInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-black transition-colors font-medium">
                                <Github className="w-5 h-5 text-slate-800 mr-2"/> GitHub
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-900 italic text-slate-600 text-sm">
                        "{developerInfo.note}"
                    </div>
                </div>
            </div>
        </div>

        {/* Section 3: Closing Line */}
        <div className="text-center py-8">
            <p className="text-xl font-medium text-slate-900">{aboutContent.closing}</p>
            <div className="mt-4 h-1 w-24 bg-red-500 rounded mx-auto"></div>
        </div>

      </div>

      {/* Image Modal / Lightbox */}
      {isImageOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsImageOpen(false)}
        >
            <div className="relative max-w-3xl max-h-full">
                <button 
                    onClick={() => setIsImageOpen(false)}
                    className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors focus:outline-none"
                >
                    <X className="w-10 h-10" />
                </button>
                <img 
                    src={developerInfo.image} 
                    alt={developerInfo.name} 
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain border-4 border-white"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                    onError={(e) => {e.target.src = "https://ui-avatars.com/api/?name=Abrar+Ali&size=300&background=random"}} 
                />
            </div>
        </div>
      )}

    </div>
  );
};

export default About;