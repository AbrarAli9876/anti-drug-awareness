import React from 'react';
// Ensure you have created src/data/drugsData.js before running this!
import { drugsData } from '../data/drugsData';
import { AlertTriangle, Info } from 'lucide-react';

const TypesOfDrugs = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Common Types of Drugs
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            What They Are and How They Work
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Drugs can be legal (such as alcohol, tobacco, and prescription medicines) or illegal (such as heroin, cocaine, or methamphetamine). Drug misuse happens when someone takes a substance in a way that is not intended — taking too much, using it too often, taking someone else’s medication, or using it simply “to get high.”
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Below is a clear, easy-to-understand overview of some of the most commonly encountered substances, how they affect the body, and the risks associated with their misuse.
          </p>
        </div>

        {/* Drugs List */}
        <div className="space-y-8">
          {drugsData.map((drug) => (
            <div key={drug.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                {/* Icon Section */}
                <div className={`md:w-32 ${drug.bg} flex items-center justify-center p-8 md:p-0`}>
                  <drug.icon className={`w-16 h-16 ${drug.color}`} />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{drug.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 italic">{drug.desc}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Effects */}
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Short-Term Effects</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                        {drug.shortTerm.map((effect, idx) => (
                          <li key={idx}>{effect}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Risks */}
                    <div>
                      <h4 className="font-bold text-red-600 mb-2 text-sm uppercase tracking-wide">Long-Term Risks</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                        {drug.longTerm.map((risk, idx) => (
                          <li key={idx}>{risk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-800 font-medium">
                        <span className="font-bold">Note:</span> {drug.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Understanding This Matters</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
            <div className="flex items-start"><Info className="w-5 h-5 text-blue-400 mr-2 mt-1"/> <span>Recognize early misuse</span></div>
            <div className="flex items-start"><Info className="w-5 h-5 text-blue-400 mr-2 mt-1"/> <span>Make safe, informed decisions</span></div>
            <div className="flex items-start"><Info className="w-5 h-5 text-blue-400 mr-2 mt-1"/> <span>Avoid accidental overdose</span></div>
            <div className="flex items-start"><Info className="w-5 h-5 text-blue-400 mr-2 mt-1"/> <span>Support others without judgment</span></div>
          </div>
          <p className="text-slate-400 text-sm border-t border-slate-700 pt-6">
            If you are unsure whether something is safe, always check with a trained medical professional. Misuse often begins with curiosity or peer pressure — knowing the truth helps prevent harm.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TypesOfDrugs;