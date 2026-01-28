import React, { useState } from 'react';
import { OnboardingStep } from '../types';
import { Box, MessageSquare, Rocket, Download, Camera, BookOpen, CheckCircle2, AlertTriangle, X, Settings, Copy, Check } from 'lucide-react';

interface StepCardProps {
  step: OnboardingStep;
  isLast?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, isLast }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      // 检测是否在 Tauri 环境中
      const tauriWindow = window as typeof window & { __TAURI__?: { clipboard?: { writeText: (text: string) => Promise<void> } } };

      if (tauriWindow.__TAURI__?.clipboard?.writeText) {
        // Tauri 环境：使用 Tauri 剪贴板 API
        await tauriWindow.__TAURI__.clipboard.writeText(text);
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        // 标准浏览器环境
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback：使用 execCommand
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (error) {
      console.error('复制失败:', error);
      // Fallback：使用 execCommand
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
      } catch (e) {
        console.error('Fallback 复制也失败:', e);
      }
    }
  };

  const renderCopyableText = (detail: string) => {
    // 检测链接
    const urlMatch = detail.match(/(https?:\/\/[^\s]+)/);
    if (urlMatch) {
      const url = urlMatch[1];
      const beforeUrl = detail.substring(0, detail.indexOf(url));
      return (
        <span className="flex flex-wrap items-center gap-1">
          <span>{beforeUrl}</span>
          <button
            onClick={() => copyToClipboard(url)}
            className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-xs break-all"
          >
            {copiedText === url ? <Check size={12} /> : <Copy size={12} />}
            <span className="break-all">{url}</span>
          </button>
        </span>
      );
    }

    // 检测账号密码
    if (detail.includes('登录账号') && detail.includes('密码')) {
      const accountMatch = detail.match(/登录账号[：:]\s*(\S+)/);
      const passwordMatch = detail.match(/密码[：:]\s*(\S+)/);
      if (accountMatch && passwordMatch) {
        return (
          <span className="flex flex-wrap items-center gap-2">
            <span>登录账号：</span>
            <button
              onClick={() => copyToClipboard(accountMatch[1])}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
            >
              {copiedText === accountMatch[1] ? <Check size={12} /> : <Copy size={12} />}
              {accountMatch[1]}
            </button>
            <span>密码：</span>
            <button
              onClick={() => copyToClipboard(passwordMatch[1])}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
            >
              {copiedText === passwordMatch[1] ? <Check size={12} /> : <Copy size={12} />}
              {passwordMatch[1]}
            </button>
          </span>
        );
      }
    }

    // 检测授权验证 name 和注册码
    if (detail.includes('授权验证') && detail.includes('name')) {
      const nameMatch = detail.match(/name[：:]\s*(\S+)/);
      const serialMatch = detail.match(/(?:serial|序列号|注册码)[\/\s]*(?:序列号|注册码)?[：:]\s*(\S+)/);
      if (nameMatch && serialMatch) {
        return (
          <span className="flex flex-wrap items-center gap-2">
            <span>授权验证 name：</span>
            <button
              onClick={() => copyToClipboard(nameMatch[1])}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
            >
              {copiedText === nameMatch[1] ? <Check size={12} /> : <Copy size={12} />}
              {nameMatch[1]}
            </button>
            <span>注册码：</span>
            <button
              onClick={() => copyToClipboard(serialMatch[1])}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
            >
              {copiedText === serialMatch[1] ? <Check size={12} /> : <Copy size={12} />}
              {serialMatch[1]}
            </button>
          </span>
        );
      }
    }

    return <span>{detail}</span>;
  };
  const IconComponent = {
    Box,
    MessageSquare,
    Rocket,
    Download,
    Camera,
    BookOpen
  }[step.iconName];

  return (
    <div className="relative flex gap-6 pb-12 group last:pb-0">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute top-14 left-6 w-0.5 h-[calc(100%-3.5rem)] bg-slate-200 group-hover:bg-indigo-200 transition-colors duration-300" />
      )}

      {/* Icon Bubble */}
      <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-50 transition-all duration-300 ${step.isWarning ? 'bg-amber-100 text-amber-600' : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'}`}>
        {IconComponent && <IconComponent size={20} strokeWidth={2.5} />}
      </div>

      {/* Content Card */}
      <div className={`flex-1 rounded-xl p-6 border shadow-sm transition-all duration-300 hover:shadow-md ${step.isWarning ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-100'}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-bold ${step.isWarning ? 'text-amber-800' : 'text-slate-800'} flex flex-wrap items-center gap-x-2 gap-y-1`}>
            <span className="opacity-50 mr-1 text-sm font-mono whitespace-nowrap">STEP {step.id.toString().padStart(2, '0')}</span>
            {step.softwareName ? (
                <>
                    <span className="mr-1">{step.category}：</span>
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-base transition-colors duration-300 shadow-sm ${
                        step.isWarning 
                            ? 'bg-amber-200 text-amber-900 border border-amber-300' 
                            : 'bg-indigo-50 text-indigo-700 border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600'
                    }`}>
                        {step.softwareName}
                    </span>
                </>
            ) : (
                <span>{step.title}</span>
            )}
          </h3>
          {step.isWarning ? (
             <AlertTriangle className="text-amber-500 animate-pulse flex-shrink-0" size={20} />
          ) : (
             <CheckCircle2 className="text-slate-300 group-hover:text-emerald-500 transition-colors flex-shrink-0" size={20} />
          )}
        </div>
        
        <p className={`mb-4 ${step.isWarning ? 'text-amber-700' : 'text-slate-600'}`}>
          {step.description}
        </p>

        {step.details && step.details.length > 0 && (
          <ul className={`space-y-2 text-sm rounded-lg p-3 ${step.isWarning ? 'bg-amber-100/50 text-amber-800' : 'bg-slate-50 text-slate-500'}`}>
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                {renderCopyableText(detail)}
              </li>
            ))}
          </ul>
        )}

        {step.modalButton && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <Settings size={16} />
            {step.modalButton.label}
          </button>
        )}
      </div>

      {/* Modal */}
      {step.modalButton && isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-800">{step.modalButton.label}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(step.modalButton!.content)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {copiedText === step.modalButton.content ? <Check size={16} /> : <Copy size={16} />}
                  {copiedText === step.modalButton.content ? '已复制' : '复制代码'}
                </button>
                <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
                  <X size={20} className="text-slate-500" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-auto flex-1">
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap font-mono">
                {step.modalButton.content}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepCard;