    import React from 'react';
import { 
    sayNoIntro, refusalStrategies, alternatives, protectiveHabits, 
    peerResponseTips, pressureStrategies, longTermBenefits, supportActions 
} from '../data/sayNoData';
import { Check, UserCheck, Zap, AlertTriangle, Shield, ArrowRight } from 'lucide-react';

const SayNo = ({ setPage }) => {
    
    // Helper Component for Benefit List
    const BenefitGroup = ({ group, items }) => (
        <div className="p-4 bg-slate-50 rounded-lg shadow-inner">
            <h4 className="font-bold text-red-600 mb-3 uppercase text-sm tracking-wider">{group}</h4>
            <ul className="space-y-1 text-slate-700 text-sm">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2 shrink-0"/> {item}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-red-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        Say No to Drugs
                    </h1>
                    <p className="text-xl text-red-100 max-w-4xl mx-auto">
                        {sayNoIntro.headline}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
                
                {/* Intro & Note */}
                <div className="bg-slate-50 p-8 rounded-2xl shadow-md border border-slate-200 text-lg text-slate-700 leading-relaxed">
                    <p className="mb-4">{sayNoIntro.description}</p>
                    <p className="font-semibold text-red-600 italic">
                        {sayNoIntro.note}
                    </p>
                </div>

                {/* 1. Quick Refusal Strategies */}
                <div className="border p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                        <Shield className="w-7 h-7 mr-3"/> Quick Refusal Strategies
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Sometimes all you need is a clear, simple response. Use these easy lines to decline confidently.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {refusalStrategies.map((line, i) => (
                            <div key={i} className="p-3 bg-red-50 border-l-4 border-red-400 font-medium text-slate-800 rounded-md">
                                {line}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-sm text-slate-500 italic">
                        Tips: Say your line firmly, maintain eye contact, and remember: you don’t owe anyone an explanation.
                    </div>
                </div>

                {/* 2. Healthy Alternatives */}
                <div className="py-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                        Healthy Alternatives (Powerful Substitutes)
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {alternatives.map((alt, i) => (
                            <div key={i} className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm transition-shadow hover:shadow-md">
                                <alt.icon className="w-8 h-8 text-blue-600 mb-3"/>
                                <h3 className="font-bold text-blue-900 mb-2">{alt.title}</h3>
                                <p className="text-sm text-blue-800">{alt.items.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-slate-600 font-semibold italic">
                        Healthy activities release natural feel-good chemicals — no drugs needed.
                    </p>
                </div>

                {/* 3. Build Protective Habits */}
                <div className="bg-slate-800 p-8 rounded-2xl text-white shadow-xl">
                    <h2 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                        <Shield className="w-7 h-7 mr-3"/> Build Protective Habits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {protectiveHabits.map((habit, i) => (
                            <li key={i} className="flex items-start space-x-3 text-slate-200">
                                <UserCheck className="w-5 h-5 text-green-400 shrink-0 mt-1"/>
                                <span>{habit}</span>
                            </li>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-slate-400 italic">
                        Good habits make saying no easy — they strengthen your confidence and priorities.
                    </p>
                </div>

                {/* 4. Friends & 5. Detailed Strategies */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">When Offers Come From Friends</h3>
                        <ul className="space-y-3 text-slate-700 text-sm">
                            {peerResponseTips.map((tip, i) => (
                                <li key={i} className="flex items-start">
                                    <ArrowRight className="w-4 h-4 text-red-500 mr-2 mt-1 shrink-0"/> {tip}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-bold text-sm text-red-600">
                            Reminder: A real friend will never pressure you to do something you aren’t comfortable with.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Strategies to Avoid Peer Pressure</h3>
                        <ul className="space-y-3">
                            {pressureStrategies.map((strategy, i) => (
                                <li key={i}>
                                    <strong className="text-slate-800">{i + 1}. {strategy.text}:</strong>
                                    <span className="text-sm text-slate-600 block">{strategy.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 6. Self Confidence Builder */}
                <div className="bg-red-100 p-8 rounded-2xl text-center shadow-lg">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Self-Confidence Builder</h3>
                    <div className="grid md:grid-cols-3 gap-4 font-medium text-red-700 italic">
                        <p>“My life, my choices.”</p>
                        <p>“I don’t need drugs to belong.”</p>
                        <p>“The right people accept me as I am.”</p>
                    </div>
                    <p className="mt-4 text-sm font-bold text-red-900">
                        Confidence → Strength → Wise Choices.
                    </p>
                </div>

                {/* 7. Long Term Benefits */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Long-Term Benefits of Saying No</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {longTermBenefits.map((group, i) => (
                            <BenefitGroup key={i} group={group.group} items={group.items}/>
                        ))}
                    </div>
                </div>

                {/* 9. What to do if pressured */}
                <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                    <h2 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                        <AlertTriangle className="w-7 h-7 mr-3"/> What To Do If You Feel Pressure
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {supportActions.map((action, i) => (
                            <li key={i} className="flex items-start space-x-3 text-slate-200">
                                <ArrowRight className="w-5 h-5 text-yellow-400 shrink-0 mt-1"/>
                                <span>{action}</span>
                            </li>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-slate-400 italic font-semibold">
                        Your safety comes first. Saying no today protects your health, relationships, and every opportunity your future holds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SayNo;