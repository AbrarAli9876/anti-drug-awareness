import React from 'react';
import { effectsIntro, effectsSections, overdoseData, impactData, emotionalData } from '../data/effectsData';
import { AlertTriangle, ShieldAlert, CheckCircle, XCircle, Info, Zap } from 'lucide-react';

const Effects = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">{effectsIntro.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{effectsIntro.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* Intro */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-lg text-slate-700 leading-relaxed">
          {effectsIntro.description}
        </div>

        {/* Main 4 Sections (Physical, Mental, Social, Long-term) */}
        {effectsSections.map((section) => (
          <div key={section.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
            <div className="bg-slate-100 p-6 flex items-center border-b border-slate-200">
              <section.icon className="w-8 h-8 text-red-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            </div>
            
            <div className="p-8">
              {section.intro && <p className="mb-8 text-slate-600 italic">{section.intro}</p>}
              
              <div className="grid md:grid-cols-2 gap-8">
                {section.columns.map((col, idx) => (
                  <div key={idx} className={col.isRisk ? "bg-red-50 p-6 rounded-xl border border-red-100" : "bg-slate-50 p-6 rounded-xl border border-slate-200"}>
                    <h3 className={`font-bold mb-4 uppercase tracking-wider text-sm ${col.isRisk ? "text-red-700" : "text-slate-800"}`}>
                      {col.title}
                    </h3>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm md:text-base text-slate-700">
                          {col.isRisk ? 
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 shrink-0"/> : 
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-2 shrink-0"></div>
                          }
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {section.note && (
                <div className="mt-8 flex items-start bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <Info className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">{section.note}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Overdose Section */}
        <div className="bg-slate-800 rounded-3xl overflow-hidden text-white shadow-xl">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <ShieldAlert className="w-10 h-10 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold">{overdoseData.title}</h2>
            </div>
            <p className="text-slate-300 mb-8">An overdose is a medical emergency. Quick action can save a life.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-red-400 font-bold mb-4 uppercase">Signs of Overdose</h3>
                <ul className="space-y-2">
                  {overdoseData.signs.map((sign, i) => (
                    <li key={i} className="flex items-center"><XCircle className="w-4 h-4 text-red-500 mr-2" /> {sign}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-600/20 p-6 rounded-xl border border-red-500/30">
                <h3 className="text-white font-bold mb-4 uppercase">What to Do Immediately</h3>
                <ul className="space-y-3">
                  {overdoseData.actions.map((action, i) => (
                    <li key={i} className="flex items-start font-medium"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" /> {action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Polydrug & Daily Life Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Polydrug */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <Zap className="w-6 h-6 text-yellow-500 mr-2" /> Polydrug Use (Mixing)
            </h3>
            <p className="text-slate-600 mb-4 text-sm">Mixing drugs—especially alcohol with pills—dramatically increases risks.</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Body becomes confused by mixed signals</li>
              <li>• Higher chance of respiratory failure</li>
              <li>• Effects become unpredictable</li>
            </ul>
          </div>

          {/* Addiction Risk */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-orange-500 mr-2" /> Risk of Addiction
            </h3>
            <p className="text-slate-600 mb-4 text-sm">Tolerance leads to compulsive drug-seeking and loss of control.</p>
            <div className="bg-orange-50 p-4 rounded-lg text-sm text-orange-800 font-medium">
              Addiction is a treatable medical condition, not a moral failure.
            </div>
          </div>
        </div>

        {/* Impact on Daily Life */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Impact on Daily Life</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {impactData.map((area, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-bold text-slate-800 mb-3 border-b pb-2 border-slate-100">{area.title}</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {area.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-yellow-400 rounded-xl p-6 text-center shadow-lg transform hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2 flex justify-center items-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-slate-900" /> IMPORTANT WARNING
          </h3>
          <p className="text-slate-900 font-medium text-lg">
            Combining drugs — including alcohol with prescription medicines — dramatically increases the risk of fatal reactions.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center text-slate-500 text-sm italic">
          Drug misuse affects far more than just the momentary high. It impacts the entire body, mental health, relationships, and overall life stability.
        </div>

      </div>
    </div>
  );
};

export default Effects;