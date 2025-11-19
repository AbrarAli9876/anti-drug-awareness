import React, { useState } from 'react';
// Ensure these data files exist in src/data/
import { signsIntro, signsSections, socialPracticalSigns, specificAudiences, dependencySigns } from '../data/signsData';
import { Activity, Brain, Users, AlertTriangle, ShieldAlert, CheckSquare, MessageSquare } from 'lucide-react';

const SignsOfAddiction = ({ setPage }) => {
    const [checkedItems, setCheckedItems] = useState({
        secrecy: false, grades: false, money: false, appearance: false, 
        mood: false, sleep: false, withdrawal: false, lossOfInterest: false
    });

    const handleCheckboxChange = (name) => {
        setCheckedItems(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const checkedCount = Object.values(checkedItems).filter(value => value).length;

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        How to Recognize Early Signs of Addiction
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        {signsIntro.subtitle}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
                
                {/* Intro */}
                <div className="bg-red-50 p-8 rounded-2xl shadow-sm border border-red-200 text-lg text-slate-700 leading-relaxed">
                    <p>{signsIntro.paragraph}</p>
                    <p className="mt-4 font-semibold text-slate-800">
                        Look for sustained changes in routine, mood, appearance, social circle, or responsibilities.
                    </p>
                </div>

                {/* Main Signs Grid (Physical, Behavioral, Psychological) */}
                <div className="grid md:grid-cols-3 gap-8">
                    {signsSections.map((section) => (
                        <div key={section.id} className="bg-slate-50 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
                            <div className="p-6">
                                <section.icon className="w-8 h-8 text-red-600 mb-3" />
                                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">{section.title}</h2>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    {section.indicators.slice(0, 6).map((item, i) => ( // Show first 6 for clean view
                                        <li key={i} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                    {section.indicators.length > 6 && (
                                        <li className="text-xs italic text-slate-500 pt-2">...and {section.indicators.length - 6} more indicators.</li>
                                    )}
                                </ul>
                            </div>
                            <div className="mt-auto p-6 bg-slate-100/50 border-t border-slate-200 text-sm text-slate-600 italic">
                                <span className="font-semibold">Why this matters:</span> {section.whyMatters || section.note}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social & Practical Signs */}
                <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-red-400 mb-4">{socialPracticalSigns.title}</h2>
                            <ul className="space-y-3 text-slate-300">
                                {socialPracticalSigns.indicators.map((item, i) => (
                                    <li key={i} className="flex items-start text-base">
                                        <Users className="w-5 h-5 text-blue-400 mr-3 mt-1 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* UPDATED: When to Be Concerned with Action Steps */}
                        <div className="flex flex-col justify-between p-6 bg-slate-800 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-4">When to Be Concerned</h3>
                            
                            <p className="text-slate-300 mb-4">
                                Concern is justified when **multiple signs appear together** or persist for several weeks.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-200 mb-6 border-b border-slate-700 pb-4">
                                <li className="font-semibold text-yellow-300 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> Multiple signs persist for 2+ weeks</li>
                                <li className="font-semibold text-yellow-300 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> Increased secrecy or withdrawal</li>
                                <li className="font-semibold text-yellow-300 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> Declining academic/work performance</li>
                            </ul>
                            
                            <h4 className="text-base font-bold text-red-300 mb-2">Recommended Actions:</h4>
                            <ul className="space-y-2 text-sm text-slate-100">
                                <li className="flex items-start"><MessageSquare className="w-4 h-4 mr-2 mt-1 shrink-0" /> Talk calmly, without judgment.</li>
                                <li className="flex items-start"><MessageSquare className="w-4 h-4 mr-2 mt-1 shrink-0" /> Share observations, not accusations.</li>
                                <li className="flex items-start"><MessageSquare className="w-4 h-4 mr-2 mt-1 shrink-0" /> Encourage speaking to a counselor or doctor.</li>
                                <li className="flex items-start"><MessageSquare className="w-4 h-4 mr-2 mt-1 shrink-0" /> Offer support and listen patiently.</li>
                            </ul>
                        </div>
                        {/* END UPDATED SECTION */}

                    </div>
                </div>
                
                {/* Short Checklist */}
                <div className="bg-slate-100 p-8 rounded-2xl shadow-inner border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Short Checklist (Early Warning Signs)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {Object.keys(checkedItems).map((key) => (
                            <label key={key} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-slate-200 cursor-pointer hover:bg-red-50 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={checkedItems[key]}
                                    onChange={() => handleCheckboxChange(key)}
                                    className="h-5 w-5 text-red-600 rounded border-gray-300 focus:ring-red-500"
                                />
                                <span className={`font-medium ${checkedItems[key] ? 'text-red-700' : 'text-slate-700'}`}>
                                    {key === 'secrecy' && 'More secrecy'}
                                    {key === 'grades' && 'Drop in grades/work performance'}
                                    {key === 'money' && 'Unexplained money loss'}
                                    {key === 'appearance' && 'Changes in physical appearance'}
                                    {key === 'mood' && 'Sudden mood swings'}
                                    {key === 'sleep' && 'Sleeping too much or too little'}
                                    {key === 'withdrawal' && 'Withdrawal from friends/family'}
                                    {key === 'lossOfInterest' && 'Loss of interest in normal activities'}
                                </span>
                            </label>
                        ))}
                    </div>
                    <div className="mt-8 text-center text-lg font-bold">
                        <p className={checkedCount >= 2 ? 'text-red-600' : 'text-slate-700'}>
                            Checked items: {checkedCount}
                        </p>
                        {checkedCount >= 2 && (
                            <p className="text-sm mt-2 text-red-500 flex items-center justify-center">
                                <ShieldAlert className="w-4 h-4 mr-2"/> If 2 or more boxes are checked, strongly consider seeking professional advice.
                            </p>
                        )}
                    </div>
                </div>

                {/* Audience Specific Signs (Teens/Adults) */}
                <div className="grid md:grid-cols-2 gap-8">
                    {specificAudiences.map((audience, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{audience.title} Signs</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {audience.indicators.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <MessageSquare className="w-4 h-4 text-blue-500 mr-2 mt-1 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Dependency Signs (Withdrawal & Advanced) */}
                <div className="grid md:grid-cols-2 gap-8">
                    {dependencySigns.map((stage, index) => (
                        <div key={index} className="bg-slate-800 p-6 rounded-2xl text-white">
                            <h3 className="text-xl font-bold mb-4 text-red-400">{stage.title}</h3>
                            <ul className="space-y-2 text-sm text-slate-300">
                                {stage.symptoms.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs italic text-slate-400">{stage.note}</p>
                        </div>
                    ))}
                </div>

                {/* Closing Warning Box */}
                <div className="bg-yellow-400 rounded-xl p-6 text-center shadow-lg transform hover:scale-[1.02] transition-transform">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2 flex justify-center items-center">
                        <ShieldAlert className="w-8 h-8 mr-3 text-slate-900" /> IMPORTANT: Do NOT Self-Diagnose
                    </h3>
                    <p className="text-slate-900 font-medium text-lg">
                        Do NOT try to diagnose someone on your own. This list is for awareness, not medical judgement. If the person’s safety is at risk, contact emergency services immediately.
                    </p>
                </div>
                
                {/* Closing Message */}
                <div className="text-center text-slate-500 text-sm italic">
                    Recognizing the early signs of addiction gives you the power to act before the situation becomes severe. Trust your instincts — small changes can signal bigger problems.
                </div>
            </div>
        </div>
    );
};

export default SignsOfAddiction;