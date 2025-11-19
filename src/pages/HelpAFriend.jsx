import React from 'react';
import { 
    helpFriendIntro, stepGuide, whatNotToDo, supportPatterns, 
    interventionSigns, familySupport, refusalResponse, selfCare 
} from '../data/helpFriendData';
import { Shield, MessageSquare, AlertTriangle, Users, Heart, Phone, XCircle } from 'lucide-react';

const HelpAFriend = ({ setPage }) => {

    const CautionList = ({ items }) => (
        <ul className="space-y-2 text-sm text-red-100">
            {items.map((item, i) => (
                <li key={i} className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
    
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-red-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        How to Help a Friend
                    </h1>
                    <p className="text-xl text-red-100 max-w-4xl mx-auto">
                        {helpFriendIntro.headline}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
                
                {/* Intro */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500 text-lg text-slate-700 leading-relaxed">
                    <p className="mb-4">{helpFriendIntro.description}</p>
                    <p className="font-semibold text-slate-800 italic">
                        {helpFriendIntro.approach}
                    </p>
                </div>

                {/* 1. Step-by-Step Guide */}
                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-slate-900 text-center">
                        Practical Steps to Help a Friend
                    </h2>
                    {stepGuide.map((step) => (
                        <div key={step.step} className="md:flex md:space-x-8 bg-white p-6 rounded-2xl shadow-md border-b-4 border-blue-100">
                            <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
                                <div className="flex items-center space-x-3 text-red-600">
                                    <span className="text-4xl font-extrabold">{step.step}.</span>
                                    <step.icon className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mt-2">{step.title}</h3>
                            </div>
                            <div className="md:w-3/4">
                                <p className="font-semibold text-slate-700 mb-4">{step.actions.join(' ')}</p>
                                
                                {step.examples && (
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <h4 className="font-bold text-blue-800 text-sm mb-1">Examples of 'I' Statements:</h4>
                                        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                                            {step.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                                        </ul>
                                    </div>
                                )}
                                
                                {step.supportivePhrases && (
                                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                                        <h4 className="font-bold text-green-800 text-sm mb-1">Supportive Phrases:</h4>
                                        <ul className="text-sm text-green-700 list-disc list-inside">
                                            {step.supportivePhrases.map((phrase, i) => <li key={i}>{phrase}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {step.avoid && (
                                    <div className="mt-4 text-sm text-red-600">
                                        <span className="font-bold">Avoid:</span> {step.avoid.join(', ')}
                                    </div>
                                )}
                                
                                {step.boundaries && (
                                    <div className="mt-4 text-sm text-red-600">
                                        <h4 className="font-bold">Boundaries:</h4> {step.boundaries.join(', ')}
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. What Not To Do & 3. Support Without Pressure */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* What Not To Do */}
                    <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                            <XCircle className="w-6 h-6 mr-3"/> What NOT To Do
                        </h3>
                        <CautionList items={whatNotToDo} />
                        <p className="mt-6 text-sm text-slate-400 italic">
                            Addiction thrives in secrecy and denial — honesty and safety matter most.
                        </p>
                    </div>

                    {/* How to Support */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <Heart className="w-6 h-6 text-green-600 mr-3"/> How to Support Gently
                        </h3>
                        <ul className="space-y-3 text-slate-700 text-base">
                            {supportPatterns.map((pattern, i) => (
                                <li key={i} className="flex items-start">
                                    <MessageSquare className="w-4 h-4 text-blue-500 mr-2 mt-1 shrink-0" />
                                    {pattern}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-slate-500 italic">
                            Your steady presence may be the support they need to seek help.
                        </p>
                    </div>
                </div>
                
                {/* 4. Signs They Need Help & 5. Family Support */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Signs They Need Help */}
                    <div className="bg-yellow-50 p-6 rounded-2xl shadow-md border-l-4 border-yellow-400">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2"/> Professional Intervention Needed
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">If you notice these patterns, professional help is strongly recommended:</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {interventionSigns.map((sign, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 shrink-0"></div>
                                    {sign}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Family Support */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <Users className="w-5 h-5 text-blue-600 mr-2"/> Support for Families
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">If the person is a family member, use these strategies:</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {familySupport.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 6. Refusal & 7. Self Care */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* If they refuse */}
                    <div className="bg-slate-100 p-6 rounded-2xl shadow-md border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">What If They Refuse Help?</h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {refusalResponse.map((response, i) => (
                                <li key={i} className="flex items-start">
                                    <MessageSquare className="w-4 h-4 text-red-500 mr-2 mt-1 shrink-0" />
                                    {response}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs italic text-slate-500">
                            People often seek help once they feel safe and supported, not pressured.
                        </p>
                    </div>
                    
                    {/* Self Care */}
                    <div className="bg-red-600 p-6 rounded-2xl text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Heart className="w-6 h-6 text-yellow-300 mr-3"/> When YOU Need Support Too
                        </h3>
                        <p className="text-sm font-semibold text-red-100 mb-3">Helping someone struggling with drugs can be emotionally draining. Take care of yourself:</p>
                        <ul className="space-y-2 text-sm text-white">
                            {selfCare.map((care, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-3 mt-2 shrink-0"></div>
                                    {care}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Closing Message */}
                <div className="text-center text-slate-500 text-sm italic">
                    Supporting someone who might be using drugs is an act of courage and compassion. You don’t need to have all the answers — you only need to show care, listen, and encourage them to get help. Your voice may be the reason they choose a safer and healthier path.
                </div>
            </div>
        </div>
    );
};

export default HelpAFriend;