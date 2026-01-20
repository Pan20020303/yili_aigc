
import React from 'react';

interface TutorialProps {
  onBack: () => void;
  onNext: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ onBack, onNext }) => {
  return (
    <div className="min-h-screen bg-background-dark flex flex-col max-w-md mx-auto">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined text-white">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-sm font-bold tracking-widest uppercase">紫金领冠</h2>
            <span className="text-[10px] text-primary font-medium tracking-widest uppercase">高端育儿影像</span>
          </div>
          <div className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined text-white">info</span>
          </div>
        </div>
      </div>

      <main className="pb-32 px-6 pt-8 overflow-y-auto">
        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/60 pb-2">拍摄教程</h1>
        <p className="text-[#af9eb7] text-base leading-relaxed mb-8">遵循我们的专业指南，与孩子一起定格完美的AI瞬间。</p>

        {/* 进度 */}
        <div className="mb-8">
          <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 luxury-gradient">
            <div className="flex justify-between items-center">
              <p className="text-white text-sm font-semibold tracking-wide">当前教学进度</p>
              <p className="text-primary text-xs font-bold bg-primary/20 px-2 py-1 rounded-full tracking-wider">1 / 5</p>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-primary rounded-full purple-glow" style={{ width: '20%' }}></div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <p className="text-[#af9eb7] text-xs font-medium">姿势 1: 拥抱与情感连接</p>
            </div>
          </div>
        </div>

        {/* 姿势卡片 */}
        <div className="flex flex-col gap-6">
          <div className="group relative flex flex-col rounded-xl bg-[#231c26] shadow-xl overflow-hidden border border-white/5 transition-all">
            <div className="relative w-full aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbiVTyR0DyToikH9RRQqjXrg02_-jJz_f-TYwcnBXaJQduGpdASVtSAG_5U7BomjVCH89bbDv3H32ffLdYcPSpnyBLJQ4BR-uS142bFiB-ZFYbp8nsINFt0_qFhsPgDWV--agWWmvbE8WnY-JE9fsWRt0onZD0jI1n_xqnOb-IBu2Aj6KbDY2Yrj0ElTNiaIXSNI69y5ki1yY6JdHue1U5lB9fFD_qf-wfz6sRKt7NJVkjadz8BBzDr1kWGcdaGDvd7Ery9xB55nQ")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#231c26] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col gap-3 p-6 -mt-10 relative z-10 bg-[#231c26]/90 backdrop-blur-sm rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block">姿势 01</span>
                  <h3 className="text-white text-2xl font-bold leading-tight">温暖拥抱</h3>
                </div>
                <button className="bg-primary/20 p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <p className="text-[#af9eb7] text-sm font-medium leading-relaxed italic">“用最自然的方式紧紧拥抱你的孩子。”</p>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border-l-2 border-primary/50">
                <span className="material-symbols-outlined text-gold-accent text-sm mt-0.5">lightbulb</span>
                <p className="text-[#af9eb7] text-xs leading-relaxed">
                  <strong className="text-white font-semibold">专家建议:</strong> 请保持宝宝面部清晰自然，以确保AI识别的准确度。
                </p>
              </div>
            </div>
          </div>

          {/* 锁定姿势 */}
          <div className="flex flex-col rounded-xl bg-[#231c26] opacity-60 border border-white/5 overflow-hidden">
             <div className="relative w-full aspect-[4/3] bg-cover bg-center grayscale" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmi-zprCQoYv6RACUy1Qyxpd3j1TxHEON5SVnL0JzzIV40Fba09XIf46eWFdYDNk6-_DO3BeRSdOlLuez8hNFLtcs15L_jsuFH3yE4tEPDuCc4kFlq18-FrgWN60RCV4E8T76QB3AwaN1RHzq2iiWiig-vF87rGoXHSvVd-BBA0TPD4GtdGTOwsVrltedhw5v4ZFikIqGDBFuoIqfV3xe-bAx2vSVczpOQwJy2Ws4tLua4JpXb-GjOuxzaSnMZRgGdn5rMtiEYb3U")' }}></div>
             <div className="p-6 -mt-10 bg-[#231c26]/90 relative rounded-t-2xl">
               <div className="flex justify-between items-center">
                 <h3 className="text-white text-xl font-bold">牵手漫步</h3>
                 <span className="material-symbols-outlined text-gray-500">lock</span>
               </div>
             </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent">
        <div className="max-w-md mx-auto flex gap-3">
          <button 
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 h-14 rounded-full bg-primary text-white text-base font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined">auto_fix_high</span>
            <span>开始AI拍摄</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
