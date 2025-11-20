import React from 'react';
import { Shield } from 'lucide-react';

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Shield className="h-6 w-6 text-red-500" />
              <span className="font-bold text-lg uppercase">
                NashaSe<span className="text-red-500">Azaadi</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Our goal is to educate and empower communities with relevant, truthful information that supports safety and well-being.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setPage('home')} className="hover:text-red-500 transition-colors">Home</button></li>
              <li><button onClick={() => setPage('types')} className="hover:text-red-500 transition-colors">Types of Drugs</button></li>
              <li><button onClick={() => setPage('effects')} className="hover:text-red-500 transition-colors">Effects</button></li>
              <li><button onClick={() => setPage('signs')} className="hover:text-red-500 transition-colors">Signs of Addiction</button></li>
              <li><button onClick={() => setPage('sayno')} className="hover:text-red-500 transition-colors">Say No</button></li>
              <li><button onClick={() => setPage('helpfriend')} className="hover:text-red-500 transition-colors">Help a Friend</button></li>
              <li><button onClick={() => setPage('helplines')} className="hover:text-red-500 transition-colors">Helplines</button></li>
              <li><button onClick={() => setPage('faq')} className="hover:text-red-500 transition-colors">FAQ</button></li>
              <li><button onClick={() => setPage('about')} className="hover:text-red-500 transition-colors">About</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-sm mb-1 text-white font-bold">De-addiction: 1800-11-0031</p>
            <p className="text-sm mb-1 text-white font-bold">Report (NCB): 1933</p>
            <p className="text-sm mb-3 text-slate-300">Incidents: +91-11-26761000</p>
            <p className="text-xs text-slate-500">info@ncbmanas.gov.in</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-sm text-center">
          <p className="mb-4">
            <span className="font-bold text-red-500">Disclaimer:</span> This website is for educational and awareness purposes only. It does not provide medical advice. If you face a medical emergency, contact emergency services immediately.
          </p>
          <p>&copy; 2025 Anti-Drug Awareness Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;