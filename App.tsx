import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StepCard from './components/StepCard';
import CriticalAction from './components/CriticalAction';
import { ONBOARDING_STEPS, CRITICAL_NOTICE } from './constants';
import { CheckCheck, ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Progress Summary Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-indigo-50 flex items-center justify-between relative z-10">
            <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Total Steps</p>
                <p className="text-3xl font-bold text-slate-800">{ONBOARDING_STEPS.length + 1} <span className="text-base font-normal text-slate-400">tasks</span></p>
            </div>
            <div className="h-12 w-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                <CheckCheck size={24} />
            </div>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-2">
          {ONBOARDING_STEPS.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              isLast={index === ONBOARDING_STEPS.length - 1} 
            />
          ))}
        </div>

        {/* Critical Final Step */}
        <CriticalAction step={CRITICAL_NOTICE} />
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>© {new Date().getFullYear()} 呈尚策划运营部. Internal Use Only.</p>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default App;