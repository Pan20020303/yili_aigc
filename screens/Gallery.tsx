
import React from 'react';
import { GalleryItem } from '../types';

const ITEMS: GalleryItem[] = [
  { id: '1', title: '最初的拥抱', author: '@苏菲妈妈', likes: '1.2k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZSaycCwynXPXTzGvXUm66CdKKg72E4PMpovbRw3z5MGkyRQL-8Bh5m_A83QaPJ7NM6DaS2rr5o5JoqKOkGhZ2abp22OeVclwXnAA8wlxtVAj6BM5O0BFIBbhW0ysWxGAtiJIFLr2vAQZbf1BGxrbQsoR79AF0767FGyERg4GfYk4nSRbZ_Zxy7brygCHI4c1ZOscTluup3Zbzbk8o4mKh_JWWXOdE3lU29REIVFA-g-tPO-1FjQG51PwTNsEIOoytOAZzbVscpY0', aspectRatio: 'aspect-[3/4]' },
  { id: '2', title: '追逐光芒', author: '@追光者', likes: '1.1k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvjnmU5eMkfM2RXXsqfzjJy4txuXNl9XEYGBAE73W81poTJW05qX7FBSZyZUyag_IV7WoqaYESwrKy6s8v82lOihRtNEAbcuRygVpbub9l4KFRo0cZUAk5HyN7VgxI00MOF4cgXZY4Q_1M4FyRxnkgQJeRakJW7Nq5BW24DZc-XBGk4qK3l0lMhxjaw1VbFmhJc-03oiGF4BDZJnzS8A0NPxr_90GE8bQu5isVWIXpaI8JjuG7ClfgrHI-B6n7tlmfDGrlYWJgMDE', aspectRatio: 'aspect-[9/16]' },
  { id: '3', title: '薰衣草之梦', author: '@紫色天空', likes: '843', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMlZhYZOCS9b-bRo-2rMi_f19C7XgZjV5_xdbNaBSgT4Zfnz4D-VYe5LxiUeg7vpj7-etRCL3QPJJbw7cj-2yj_-3RNaL52RZG3ub-QgOg1JBNDgitT_JtV-29sAMUIMYpe9kLJwGGb-FqAs4QwDoLEvXtZTDkUX85vptQZRCXSsR7S6wYAVwDnlmvHeWLKxtqjTW7E3g7VDDlDCiD9MYy-YJkQFe9lxQXTvYcFQEYbZC3vMq0Infsqq6qw1SdaLwjR0El8t41dBI', aspectRatio: 'aspect-[2/3]' },
  { id: '4', title: '静谧深夜', author: '@催眠曲', likes: '562', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-THj5B321jbVZF9E_7q9ayErlbqmBdluMZWn_rjV4_HL3NI3LsX9z6bogvfqulJBvwFd7kVEiJ0fzIFB1J7W6fj4r3EsEUCkY7Cj3r0fxbLHInQvb5WXaIoWsuBxghyeoozVH829nrFgPIA3_bZgCaC2n_FS5JJUD9cbdl2MSS-qLwa396HGj91S64QBrOaV1WJfSke4wmhVaxLYqXvQdiK5H0Nw-kVo5_ZxFrnzovCQmPGO0MTs_p_8LqshdXTG3vGV5ucmQXIE', aspectRatio: 'aspect-[4/5]' },
  { id: '5', title: '微小的承诺', author: '@纯粹喜悦', likes: '2.5k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJDbYzNUVquppXzdw8E3KwV38aVSlnlgGG23M4uQuDlVrKIWAvBKMEpHlWnAwdR7uiPmHl1wmxJZ2GYI9fFx6UXFEqcJZ1z02CycDe47XTfEiwNF0Kqt6ZRvgCyRRTuMfwSlg4agPyxqx9vkSvcCJGt3nZijsk-qZnIUiK8-QkK4XmnCUUkHqST3_HLEFNqCjZpgMOH2zFTvVhz1eIAJVdR6DEs7vnRgUpVm8Uxb744Ni9jKEu-y4KFF7wVdhztOJwXriXkL2JlM', aspectRatio: 'aspect-[1/1]' },
  { id: '6', title: '繁星物语', author: '@爱书宝宝', likes: '921', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC2O4_bnwoxaoHSBp8hkA3S8qyYR9A163ETEyGcTjo29srd3jrocoRqSApf_aGSEv8wVsCE0fzTVBWc-BhCZDruG7fHwDVIO3o0C9xVKrmvjpojilTA1cmRzPbCY-PtwgoXUh24otxeNu9aepwFHqiQz6o3bEGYwLxJwnuhPRDBpy1WIbs5BI-rz38w9no2jjnqJyPbHin0-ZoJdOwtSTYz4ul5Y94GFe4DOCbasjLcvNf47-4_PPk-R1X5wtPaST8OoY1os1OmOo', aspectRatio: 'aspect-[3/4]' },
];

interface GalleryProps {
  onBack: () => void;
  onAdd: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onBack, onAdd }) => {
  return (
    <div className="min-h-screen bg-background-dark max-w-md mx-auto pb-32">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col items-center">
            <h1 className="text-xs tracking-[0.3em] uppercase font-light text-gold-accent">作品展厅</h1>
            <h2 className="text-sm font-bold">紫金领冠 · 守护时刻</h2>
          </div>
          <button className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <nav className="flex px-4 justify-center">
          <button className="flex-1 py-4 text-xs font-bold tracking-widest text-gold-accent border-b-2 border-gold-accent">最新上传</button>
          <button className="flex-1 py-4 text-xs font-bold tracking-widest text-slate-500 border-b-2 border-transparent">精选作品</button>
          <button className="flex-1 py-4 text-xs font-bold tracking-widest text-slate-500 border-b-2 border-transparent">我的作品</button>
        </nav>
      </header>

      <main className="p-4">
        <div className="mb-6 mt-2 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">典藏画廊</p>
          <h3 className="text-xl font-light italic">“成长的每一刻，都值得被珍藏”</h3>
        </div>

        <div className="waterfall-container">
          {ITEMS.map((item) => (
            <div key={item.id} className="waterfall-item relative group overflow-hidden rounded-xl border border-white/5 shadow-2xl">
              <div className={`w-full ${item.aspectRatio} bg-cover bg-center`} style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                <p className="text-xs font-medium text-white/90">{item.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[10px] text-white/60 font-light">{item.author}</p>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                    <span className="material-symbols-outlined !text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="text-[10px] font-bold text-white">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <button 
        onClick={onAdd}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full h-16 w-16 bg-gradient-to-tr from-primary to-primary/80 text-white shadow-xl border border-white/20 z-50 transition-transform active:scale-90"
      >
        <span className="material-symbols-outlined !text-3xl">add</span>
      </button>
    </div>
  );
};

export default Gallery;
