import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TypesOfDrugs from './pages/TypesOfDrugs';
import Effects from './pages/Effects';
import SignsOfAddiction from './pages/SignsOfAddiction';
import SayNo from './pages/SayNo';
import HelpAFriend from './pages/HelpAFriend';
import Helplines from './pages/Helplines';
import FAQ from './pages/FAQ';

function App() {
  const [page, setPage] = useState('home');

  // Global Scroll-To-Top: Runs every time 'page' changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setPage={setPage} />
      
      <main className="flex-grow">
        {page === 'home' ? (
          <HomePage setPage={setPage} />
        ) : page === 'types' ? (
          <TypesOfDrugs />
        ) : page === 'effects' ? (
          <Effects />
        ) : page === 'signs' ? (
          <SignsOfAddiction setPage={setPage} />
        ) : page === 'sayno' ? (
          <SayNo setPage={setPage} />
        ) : page === 'helpfriend' ? (
          <HelpAFriend setPage={setPage} />
        ) : page === 'helplines' ? (
          <Helplines setPage={setPage} />
        ) : page === 'faq' ? (
          <FAQ setPage={setPage} />
        ) : (
          <HomePage setPage={setPage} />
        )}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}

export default App;