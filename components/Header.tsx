import React from 'react';
import { Layers } from 'lucide-react';
import { APP_TITLE, APP_SUBTITLE, APP_DESCRIPTION } from '../constants';

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-slate-100 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Layers size={24} />
          </div>
          <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-2 py-1 rounded">
            Onboarding Manual
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          {APP_TITLE}
        </h1>
        <h2 className="text-xl text-indigo-600 font-medium mb-6">
          {APP_SUBTITLE}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          {APP_DESCRIPTION}
        </p>
      </div>
    </div>
  );
};

export default Header;