
import React from 'react';

interface ResultProps {
  image: string;
  onRegenerate: () => void;
  onBack: () => void;
}

const Result: React.FC<ResultProps> = ({ image, onRegenerate, onBack }) => {
  return (
    <div className="relative h-screen w-full flex flex-col max-w-md mx-auto overflow-hidden star-bg">
      {/* 结果主图 */}
      <div className="relative flex-1 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt="AI Generated Poster" />
        
        {/* 覆盖层：品牌水印 */}
        <div className="absolute top-12 left-6 z-30">
           <div className="bg-white/90 px-3 py-1.5 rounded-lg flex items-center gap-2 scale-90 origin-left">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClAxFhdnhofoKkb6zjGr2Vdwcw-HHs2h460QPZV9DEWnoHdPElM4LB-4WATJOaglxKZ2hJQaVs0O1OyP8NqQ7e60muGD8Y0iWrOmMIsWrLzbTFhCVf5QGApRc1wlAlvusbm7Q7lHedU38BL7ycTGeUiyTwvN0_onuAZswP01gE1eMC-WlfiTF4MdjunwVwoA7RlLD4CHkYcbYbnDIl3Drr-S2UchNSAFB27PN1r8Ld1qsYbL6g7DJuJiEO2_M_qLmrCzcwCcIkfzY" className="h-4" alt="Yili" />
              <div className="w-[1px] h-3 bg-gray-300"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_RAZZm9cLr0EgUOi_ckL9qax_FCtrmTUHM4u1YIzsnTFFswixPYj1F66o_1lYdxkmIR43VnK27vBIiJr0JB6KVSLdTQIayRuvbLQJV9n25uqzJlQ8zR1IyoAz8bj24Cz4SBAhP3xIge_Vob4NNyM0XIisxCcotan3pO0fg5DbgK8dG5uL6g0hBy0cGqKUHCLBRQV6YfxBjDN0uaxm9eoz_ugIZyg4BZyW3JAoq-wwECDaZiiDJStx-tCRZG3OCMQfwuRlPDsYPdA" className="h-4" alt="Jinlingguan" />
           </div>
        </div>

        {/* 装饰文字 */}
        <div className="absolute bottom-40 left-0 right-0 px-8 z-30">
          <div className="border-l-4 border-brand-cyan pl-4">
            <p className="text-brand-cyan text-[10px] font-black tracking-[0.3em] uppercase mb-1">Protective Edition</p>
            <h2 className="text-white text-3xl font-black italic">爱与科研的<br/>守护瞬间</h2>
          </div>
        </div>

        {/* 蒙层 */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/30 pointer-events-none"></div>
      </div>

      {/* 底部交互 */}
      <div className="bg-background-dark/90 backdrop-blur-2xl p-8 pb-12 rounded-t-[40px] border-t border-brand-cyan/20 z-40 -mt-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2 mb-2 opacity-60">
            <span className="material-symbols-outlined text-[14px] text-brand-cyan">verified</span>
            <span className="text-[10px] tracking-[0.2em] font-medium">中国专利配方 · 为爱护航</span>
          </div>
          
          <button className="w-full h-14 bg-brand-cyan text-white rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-brand-cyan/20 active:scale-95 transition-transform">
             <span className="material-symbols-outlined">share</span>
             <span>保存并分享我的守护大片</span>
          </button>
          
          <div className="flex gap-3">
             <button onClick={onRegenerate} className="flex-1 h-12 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-sm font-medium text-white/80 hover:bg-white/5">
                <span className="material-symbols-outlined text-sm">refresh</span>
                <span>重试生成</span>
             </button>
             <button onClick={onBack} className="flex-1 h-12 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-sm font-medium text-white/80 hover:bg-white/5">
                <span className="material-symbols-outlined text-sm">home</span>
                <span>返回首页</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
