
import React, { useEffect, useState } from 'react';
import { generateParentChildImage } from '../geminiService';

interface LoadingProps {
  uploadedImage: string;
  theme: string;
  onComplete: (image: string) => void;
  onCancel: () => void;
}

const Loading: React.FC<LoadingProps> = ({ uploadedImage, theme, onComplete, onCancel }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: any;
    const startSynthesis = async () => {
      // Simulate progress bar while API is working
      timer = setInterval(() => {
        setProgress(prev => Math.min(prev + (100 - prev) * 0.1, 95));
      }, 500);

      const result = await generateParentChildImage(uploadedImage, theme, 'Parent-child Photo');
      
      if (result) {
        setProgress(100);
        setTimeout(() => onComplete(result), 500);
      } else {
        // Fallback or error handling
        alert("生成失败，请稍后重试。");
        onCancel();
      }
    };

    startSynthesis();

    return () => clearInterval(timer);
  }, [uploadedImage, theme, onComplete, onCancel]);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-background-dark max-w-md mx-auto overflow-hidden">
      <div className="absolute top-0 left-0 p-6">
        <button onClick={onCancel} className="text-white">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative w-72 h-72 flex items-center justify-center mb-12">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-gold-accent !text-7xl mb-4 gold-glow">workspace_premium</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-accent/80 animate-bounce"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-accent/40 animate-bounce [animation-delay:0.1s]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-accent/20 animate-bounce [animation-delay:0.2s]"></div>
            </div>
          </div>
        </div>

        <h2 className="text-white text-[24px] font-bold text-center mb-4">
          正在生成你们的<br/>专属守护时刻
        </h2>
        <p className="text-white/60 text-base mb-8 tracking-[0.2em]">科学守护 · 正在呈现</p>

        <div className="w-full max-w-xs flex flex-col gap-4">
          <div className="rounded-full bg-white/5 overflow-hidden h-1 w-full">
            <div className="h-full bg-gradient-to-r from-primary to-gold-accent transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-gold-accent/80 text-[10px] font-medium tracking-widest uppercase text-center">AI Synthesis in Progress</p>
        </div>
      </div>

      <div className="pb-10 flex flex-col items-center gap-2 opacity-40">
        <span className="material-symbols-outlined text-white">auto_awesome</span>
        <p className="text-white text-[10px] tracking-[0.3em]">PURPLE GOLD CROWN AI LAB</p>
      </div>
    </div>
  );
};

export default Loading;
