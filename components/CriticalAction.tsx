import React from 'react';
import { OnboardingStep } from '../types';
import { BookOpen, AlertTriangle } from 'lucide-react';

interface CriticalActionProps {
  step: OnboardingStep;
}

const CriticalAction: React.FC<CriticalActionProps> = ({ step }) => {
  return (
    <div className="mt-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-indigo-800 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative p-8 sm:p-10">
          <div className="flex items-center gap-2 mb-6 text-amber-300 font-semibold tracking-wide text-sm uppercase">
            <AlertTriangle size={16} />
            <span>Most Important Step</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-1">
              <div className="text-2xl sm:text-3xl font-bold mb-4">
                 {step.softwareName ? (
                    <div className="flex flex-col gap-3 items-start">
                        <span className="opacity-80 text-lg sm:text-xl font-medium tracking-wide uppercase">{step.category}</span>
                        <span className="inline-block text-white bg-white/20 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md shadow-inner">
                            {step.softwareName}
                        </span>
                    </div>
                ) : (
                    step.title
                )}
              </div>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                {step.description}
              </p>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                 <ul className="space-y-3">
                    {step.details?.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-indigo-50">
                        <BookOpen size={18} className="mt-1 flex-shrink-0 text-amber-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <div className="flex-shrink-0 hidden sm:block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 animate-pulse">
                    <BookOpen size={48} className="text-white" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticalAction;