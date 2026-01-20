
import React, { useState, useRef } from 'react';
import { Theme } from '../types';

interface StudioProps {
  onBack: () => void;
  onGenerate: (image: string, theme: string) => void;
}

const THEMES: Theme[] = [
  { id: '1', name: '7倍乳铁·黄金守护', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2yzVGV1Ymq2NiPOvhUY7j-j3fbdCZ3VS0KIxk9kf24-A4t_k_t_m1C7_rT38ycHsw0ror7TY8cQWWqSVTlpe2F6DLzsJxAvD0bCWzOppSgSK-k-imHRNskBX2Fq9Max2fjPk1x9LJOlUe0OgbjM0unuCY4m8RddwU2tZ5hGbJkZ2ZLMqQ9BTWhvXtRC1vBi_AezFvHg5mNF0X1BJLWbocOMQv_N2EW11uaZV042a-dG9gCjQs8lkPn9vG5UgjNPZFqEY_MN5kG-8' },
  { id: '2', name: 'OPN活性·科研之光', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvlfAesOzyjOK-vAkC_kYeh5IvxIKG9whsrWgqaVY4uBTmklwoHrGWC5ZAz2Wu7YfCNuVu7fh3Hrv8J4ueL31cNvyFNnpP4SzEmJUtn-BUtGWmGOoLmvrYcgyCufLUWBZe8nC-TMI9Uh5COKr5qQex4jWR6ZPSDF7dCW0I2NO-p5FICwoGjo9qdBPZQHvifZD25UOhGv64hRWbm2ErXvhj4jejAqnfWjFGYunsimo5eHnyl37wvMTYspXjVO2yMkjqZUQMJBOLL68' },
  { id: '3', name: 'A2源生·纯净时光', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFNXQ5QillLizLgF3qXeF3q0gMDJLr5geu7UVbfr9K_XNZ72zEVypsLlJAA9QaHwOeMyxo1g11jTU5tV3g7d6RAvsGVhNssPBRkawkQWY6HAOtKUI3g0V7yx-PtuqI7KyPGXpTx5-DYfm1XLIMbshbvKxvK-j_0ftTgUpMT3tC2_KT7TMTywkrDxgFQTIBzQCG3dLhz5sDGNqzuWt3piidm53elSmFzn6Qg5WSJJA24ffpxR3DjwPRO2WWDktVB-Txj_RrCdpTVh4' },
];

const Studio: React.FC<StudioProps> = ({ onBack, onGenerate }) => {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartGeneration = () => {
    if (!previewImage) return;
    const base64Data = previewImage.split(',')[1];
    onGenerate(base64Data, selectedTheme.name);
  };

  return (
    <div className="min-h-screen bg-background-dark max-w-md mx-auto relative star-bg pb-20">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-6 py-6 flex items-center justify-between border-b border-white/5">
        <button onClick={onBack} className="size-10 flex items-center justify-center glass-panel rounded-full">
          <span className="material-symbols-outlined text-white">chevron_left</span>
        </button>
        <h2 className="text-white text-base font-bold tracking-widest">AI 守护工坊</h2>
        <div className="size-10"></div>
      </header>

      <main className="p-6">
        {/* Upload */}
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="relative mb-8 aspect-square rounded-2xl border-2 border-dashed border-brand-cyan/40 bg-brand-cyan/5 flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
        >
          {previewImage ? (
            <img src={previewImage} className="w-full h-full object-cover" alt="Upload" />
          ) : (
            <>
              <div className="size-20 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-brand-cyan text-4xl">add_a_photo</span>
              </div>
              <p className="text-white font-medium">上传合影照片</p>
              <p className="text-white/40 text-xs mt-2">建议人脸清晰，环境明亮</p>
            </>
          )}
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Themes */}
        <section className="mb-8">
          <h3 className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase mb-4">选择守护模式</h3>
          <div className="grid grid-cols-1 gap-4">
            {THEMES.map((theme) => (
              <div 
                key={theme.id}
                onClick={() => setSelectedTheme(theme)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                  selectedTheme.id === theme.id ? 'bg-brand-cyan/20 border-brand-cyan' : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="size-12 rounded-lg bg-black/40 flex items-center justify-center">
                   <span className="material-symbols-outlined text-brand-cyan">verified_user</span>
                </div>
                <div className="flex-1">
                   <p className="text-white font-bold">{theme.name}</p>
                   <p className="text-[10px] text-white/40">应用专利科研视觉风格</p>
                </div>
                {selectedTheme.id === theme.id && (
                  <span className="material-symbols-outlined text-brand-cyan">check_circle</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Agreement */}
        <div className="flex items-start gap-3 opacity-60">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 size-4 rounded bg-white/10 border-white/20 text-brand-cyan" />
          <p className="text-[10px] leading-relaxed">我已阅读并同意《AI生成服务协议》，并确认拥有上传照片的使用授权。</p>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark to-transparent max-w-md mx-auto">
        <button 
          onClick={handleStartGeneration}
          disabled={!previewImage || !agreed}
          className={`w-full h-14 rounded-full flex items-center justify-center gap-2 font-bold transition-all ${
            previewImage && agreed ? 'bg-brand-cyan text-white shadow-lg' : 'bg-white/10 text-white/40'
          }`}
        >
          <span className="material-symbols-outlined">auto_fix_high</span>
          <span>立即开启生成</span>
        </button>
      </div>
    </div>
  );
};

export default Studio;
