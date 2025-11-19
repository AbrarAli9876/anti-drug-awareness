import React, { useState } from 'react';
import { faqIntro, faqs } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ = ({ setPage }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {faqIntro.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* Intro */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-lg text-slate-700 leading-relaxed text-center">
          {faqIntro.description}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-300 ${openIndex === index ? 'border-blue-500 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:border-blue-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center group"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Still have questions?</h3>
          <p className="text-blue-800 mb-6">
            Knowledge reduces fear. If you need more answers, explore our other pages or reach out to a helpline.
          </p>
          <div className="flex justify-center gap-4">
             <button 
               onClick={() => setPage('helplines')}
               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
             >
               <PhoneIcon className="w-4 h-4 mr-2" /> View Helplines
             </button>
             <button 
               onClick={() => setPage('helpfriend')}
               className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-full border border-blue-200 hover:bg-blue-50 transition-colors"
             >
               How to Help Others
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// Simple icon component for the button above
const PhoneIcon = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default FAQ;