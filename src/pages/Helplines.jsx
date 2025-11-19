import React from 'react';
import { helplinesIntro, globalResources, indianHelplines, emergencyNumbers, localHelpSteps } from '../data/helplinesData';
import { Phone, ShieldAlert, ArrowRight } from 'lucide-react';

const Helplines = ({ setPage }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Helplines & Support
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {helplinesIntro.headline}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Intro */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-lg text-slate-700 leading-relaxed text-center">
          {helplinesIntro.description}
        </div>

        {/* Emergency Section */}
        <div className="bg-red-600 rounded-3xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
                <ShieldAlert className="w-8 h-8 mr-3"/> Emergency Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
                {emergencyNumbers.map((item, i) => (
                    <div key={i} className="bg-red-700 p-6 rounded-2xl border border-red-500">
                        <item.icon className="w-10 h-10 mx-auto mb-3 text-red-200"/>
                        <h3 className="font-bold text-lg text-red-100">{item.name}</h3>
                        <a href={`tel:${item.number}`} className="text-4xl font-extrabold block mt-2 hover:text-red-200 transition-colors">
                            {item.number}
                        </a>
                    </div>
                ))}
            </div>
        </div>

        {/* Indian Government Helplines */}
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center">
                <span className="mr-3 text-4xl">🇮🇳</span> Official Indian Government Helplines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {indianHelplines.map((line, i) => (
                    <div key={i} className={`p-8 rounded-2xl shadow-md border ${line.bg} border-slate-100 hover:shadow-lg transition-shadow`}>
                        <h3 className={`text-xl font-bold ${line.color} mb-2`}>{line.name}</h3>
                        <p className="text-slate-600 mb-6 text-sm">{line.desc}</p>
                        <div className="flex items-center">
                            <Phone className={`w-6 h-6 ${line.color} mr-3`} />
                            <a href={`tel:${line.number}`} className="text-3xl font-mono font-bold text-slate-800 hover:underline">
                                {line.number}
                            </a>
                        </div>
                        {line.altNumber && (
                             <a href={`tel:${line.altNumber}`} className="block mt-2 ml-9 text-lg font-mono font-bold text-slate-600 hover:underline">
                             or {line.altNumber}
                         </a>
                        )}
                        {line.tollFree && <span className="inline-block mt-4 px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-500 border border-slate-200">TOLL FREE</span>}
                    </div>
                ))}
            </div>
        </div>

        {/* Global Resources */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-3 text-2xl">🌍</span> Global Resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {globalResources.map((res, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="flex items-center mb-2">
                            <res.icon className="w-5 h-5 text-blue-500 mr-2"/> 
                            <h4 className="font-bold text-slate-800">{res.title}</h4>
                        </div>
                        <p className="text-sm text-slate-600">{res.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* How to find local help */}
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Find Local Help</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {localHelpSteps.map((step, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <step.icon className="w-6 h-6 text-blue-600"/>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-sm text-slate-600">{step.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* REMOVED: Local Template Section */}

        {/* Closing Advice */}
        <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Quick Advice if You Can't Find Numbers</h3>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
                If you are unable to locate a specific center, call <strong>1800-11-0031 (National Line)</strong> or <strong>112 (Emergency)</strong>. You will be guided to the nearest safe resource.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <button onClick={() => setPage('helpfriend')} className="flex items-center text-blue-700 font-bold hover:underline">
                    Help a Friend <ArrowRight className="w-4 h-4 ml-1"/>
                </button>
                <button onClick={() => setPage('sayno')} className="flex items-center text-blue-700 font-bold hover:underline">
                    Say No Strategies <ArrowRight className="w-4 h-4 ml-1"/>
                </button>
            </div>
        </div>

        <div className="text-center text-slate-500 text-sm italic">
            You are not alone. Asking for help is a sign of strength, not weakness.
        </div>

      </div>
    </div>
  );
};

export default Helplines;