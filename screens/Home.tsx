
import React from 'react';

interface HomeProps {
  onStart: () => void;
  onGallery: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart, onGallery }) => {
  return (
    <div className="relative flex flex-col h-screen max-w-md mx-auto overflow-hidden">
      {/* 顶部品牌区域 */}
      <header className="relative z-50 flex items-center justify-between px-6 pt-12 pb-4">
        <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-lg shadow-xl">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClAxFhdnhofoKkb6zjGr2Vdwcw-HHs2h460QPZV9DEWnoHdPElM4LB-4WATJOaglxKZ2hJQaVs0O1OyP8NqQ7e60muGD8Y0iWrOmMIsWrLzbTFhCVf5QGApRc1wlAlvusbm7Q7lHedU38BL7ycTGeUiyTwvN0_onuAZswP01gE1eMC-WlfiTF4MdjunwVwoA7RlLD4CHkYcbYbnDIl3Drr-S2UchNSAFB27PN1r8Ld1qsYbL6g7DJuJiEO2_M_qLmrCzcwCcIkfzY" className="h-5 object-contain" alt="Yili" />
          <div className="w-[1px] h-4 bg-gray-300"></div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_RAZZm9cLr0EgUOi_ckL9qax_FCtrmTUHM4u1YIzsnTFFswixPYj1F66o_1lYdxkmIR43VnK27vBIiJr0JB6KVSLdTQIayRuvbLQJV9n25uqzJlQ8zR1IyoAz8bj24Cz4SBAhP3xIge_Vob4NNyM0XIisxCcotan3pO0fg5DbgK8dG5uL6g0hBy0cGqKUHCLBRQV6YfxBjDN0uaxm9eoz_ugIZyg4BZyW3JAoq-wwECDaZiiDJStx-tCRZG3OCMQfwuRlPDsYPdA" className="h-5 object-contain" alt="Jinlingguan" />
        </div>
        
        <button onClick={onGallery} className="size-10 flex items-center justify-center rounded-full glass-panel">
          <span className="material-symbols-outlined text-white">gallery_thumbnail</span>
        </button>
      </header>

      {/* 核心文案 */}
      <div className="relative z-30 px-8 pt-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-[1px] w-6 bg-brand-gold"></div>
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase">Chinese Patent Formula</span>
        </div>
        <h2 className="text-white text-lg font-light tracking-widest mb-1">中国专利配方</h2>
        <h1 className="text-white text-4xl font-black italic tracking-tighter leading-tight mb-2">
          金领冠倍冠<br/>
          <span className="text-brand-cyan">7倍乳铁</span> 更强保护
        </h1>
        
        {/* 核心卖点图标组 */}
        <div className="flex gap-4 mt-6">
          {[
            { icon: 'shield_with_heart', label: '更强自护' },
            { icon: 'biotech', label: '更强吸收' },
            { icon: 'temp_preferences_custom', label: '更强防御' },
            { icon: 'energy_savings_leaf', label: '肠道活力' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 opacity-80">
              <div className="size-8 rounded-full border border-brand-cyan/30 flex items-center justify-center bg-brand-cyan/10">
                <span className="material-symbols-outlined text-[16px] text-brand-cyan">{item.icon}</span>
              </div>
              <span className="text-[10px] text-white/70 whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 产品视觉区 */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/20 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-cyan/10 rounded-full animate-pulse"></div>
        
        {/* 产品罐体模拟 */}
        <div className="relative z-20 group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABIeG5-8m5478440-iO_r_oA28yD9D8k7C_m0kP2M_vS77559-001" 
            className="w-48 h-auto drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            alt="Product"
            onError={(e) => {
              // Fallback image handling
              e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCZSaycCwynXPXTzGvXUm66CdKKg72E4PMpovbRw3z5MGkyRQL-8Bh5m_A83QaPJ7NM6DaS2rr5o5JoqKOkGhZ2abp22OeVclwXnAA8wlxtVAj6BM5O0BFIBbhW0ysWxGAtiJIFLr2vAQZbf1BGxrbQsoR79AF0767FGyERg4GfYk4nSRbZ_Zxy7brygCHI4c1ZOscTluup3Zbzbk8o4mKh_JWWXOdE3lU29REIVFA-g-tPO-1FjQG51PwTNsEIOoytOAZzbVscpY0";
            }}
          />
          
          {/* 营养圆环 */}
          <div className="absolute -right-8 top-0 nutrient-orb size-14 rounded-full flex flex-col items-center justify-center animate-bounce [animation-duration:3s]">
             <span className="text-[10px] text-brand-gold font-bold">OPN</span>
             <span className="text-[8px] text-white/60">活性蛋白</span>
          </div>
          <div className="absolute -left-10 bottom-20 nutrient-orb size-16 rounded-full flex flex-col items-center justify-center animate-pulse">
             <span className="text-[10px] text-brand-cyan font-bold">105mg</span>
             <span className="text-[8px] text-white/60">乳铁蛋白</span>
          </div>
          <div className="absolute right-0 -bottom-6 nutrient-orb size-12 rounded-full flex flex-col items-center justify-center animate-bounce [animation-delay:1s]">
             <span className="text-[10px] text-white font-bold">益生菌</span>
          </div>
        </div>
      </div>

      {/* 底部操作 */}
      <footer className="relative z-40 p-8 pb-12 flex flex-col items-center">
        <button 
          onClick={onStart}
          className="w-full h-16 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full shadow-[0_10px_30px_rgba(0,212,255,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-white text-2xl group-hover:rotate-12 transition-transform">auto_awesome</span>
          <span className="text-white text-lg font-bold tracking-widest">开启 AI 守护变装</span>
        </button>
        
        <p className="mt-6 text-[10px] text-white/40 tracking-[0.4em] uppercase">Powered by Jinlingguan AI Lab</p>
      </footer>
    </div>
  );
};

export default Home;
