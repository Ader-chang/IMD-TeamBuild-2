
import React, { useState, useRef } from 'react';
import { PowerIcon, CheckCircleIcon, UserIcon, ShieldCheckIcon, CpuChipIcon } from './components/Icons.tsx';

/**
 * Force Discovery System
 * A futuristic registration portal for team cohesion activities.
 */

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  // Directly use entry IDs as state keys to ensure 100% reliable selection tracking
  const [formData, setFormData] = useState<Record<string, string>>({
    'entry.1816636850': '',
    'entry.809484937': '',
    'entry.1104464007': '沒有，我都願意嘗試！'
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      'entry.1816636850': '',
      'entry.809484937': '',
      'entry.1104464007': '沒有，我都願意嘗試！'
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center relative">
      {/* Hidden iframe for Google Forms submission */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        className="hidden"
        ref={iframeRef}
      />

      <div className="max-w-3xl w-full relative">
        <main className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-[#0a1423e6] backdrop-blur-xl p-6 md:p-10 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          <div className="scanline"></div>
          
          <header className="mb-10 border-b border-cyan-900/50 pb-6 relative z-20">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="tech-font text-2xl md:text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#00f3ff]">
                  FORCE <span className="text-purple-500">DISCOVERY</span>
                </h1>
                <p className="text-[10px] mt-1 text-cyan-700 tracking-[0.3em] uppercase">Protocol: Cohesion Activity 2.0</p>
              </div>
              <div className="text-right tech-font text-[10px] text-gray-500">
                DATE: 01/21<br />TIME: 15:00-17:00
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-400 leading-relaxed bg-cyan-950/20 p-4 border-l-2 border-cyan-500 flex gap-3 items-start">
              <div className="mt-1 text-cyan-400"><ShieldCheckIcon /></div>
              <div>
                各位夥伴好！第二次的凝聚力活動即將到來。
                這一次，我們將「組別選擇權」交給你。每一組所使用的桌遊教材，都對應著不同的團隊超能力。
                <span className="text-xs text-purple-400 mt-2 block font-medium">※ 採「先到先得」制，名額額滿後選項將自動關閉。</span>
              </div>
            </div>
          </header>

          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSdlqpEYQp_G638WWCEFX_NbCvGhrM-xCHbHRpG7tR8ekX3WYg/formResponse" 
            method="POST" 
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-10 relative z-20"
          >
            {/* Q1: Name */}
            <section>
              <label className="tech-font text-sm text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400"></span> Q1. USER_IDENTIFICATION / 你的姓名或暱稱
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-700 group-focus-within:text-cyan-400 transition-colors">
                  <UserIcon />
                </div>
                <input 
                  type="text" 
                  name="entry.1816636850" 
                  value={formData['entry.1816636850']}
                  onChange={handleInputChange}
                  required 
                  placeholder="PLEASE ENTER YOUR NAME..." 
                  className="w-full bg-black/50 border border-cyan-500/30 rounded px-12 py-3 text-cyan-100 placeholder:text-gray-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,243,255,0.4)] transition-all"
                />
              </div>
            </section>

            {/* Q2: Selection */}
            <section>
              <label className="tech-font text-sm text-purple-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400"></span> Q2. CORE_POWER_SELECTION / 你想啟動哪種原力？
              </label>
              <div className="grid gap-3">
                <ChoiceItem 
                  id="q2_1"
                  name="entry.809484937"
                  value="【靜心默契組】—— 練習不言而喻的深度共鳴 (限 4 人)"
                  title="【靜心默契組】"
                  description="練習不言而喻的深度共鳴 (限 4 人)"
                  checked={formData['entry.809484937'] === "【靜心默契組】—— 練習不言而喻的深度共鳴 (限 4 人)"}
                  onChange={handleInputChange}
                />
                <ChoiceItem 
                  id="q2_2"
                  name="entry.809484937"
                  value="【感性說書組】—— 練習換位思考與創意聯想 (限 6 人)"
                  title="【感性說書組】"
                  description="練習換位思考與創意聯想 (限 6 人)"
                  checked={formData['entry.809484937'] === "【感性說書組】—— 練習換位思考與創意聯想 (限 6 人)"}
                  onChange={handleInputChange}
                />
                <ChoiceItem 
                  id="q2_3"
                  name="entry.809484937"
                  value="【燒腦解碼組】—— 練習精準溝通與邏輯競技 (限 4 人)"
                  title="【燒腦解碼組】"
                  description="練習精準溝通與邏輯競技 (限 4 人)"
                  checked={formData['entry.809484937'] === "【燒腦解碼組】—— 練習精準溝通與邏輯競技 (限 4 人)"}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            {/* Q3: Backup */}
            <section>
              <label className="tech-font text-sm text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-600"></span> Q3. BACKUP_PLAN / 志願調整考慮
              </label>
              <p className="text-[10px] text-gray-600 mb-3 italic">目的：幫助主管在需要微調人數時，避免排入壓力環境。</p>
              <div className="relative">
                <select 
                  name="entry.1104464007" 
                  value={formData['entry.1104464007']}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded px-4 py-3 text-sm text-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="沒有，我都願意嘗試！">沒有，我都願意嘗試！</option>
                  <option value="A. 靜心組">A. 靜心組</option>
                  <option value="B. 感性組">B. 感性組</option>
                  <option value="C. 燒腦組">C. 燒腦組</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-700">
                  <CpuChipIcon />
                </div>
              </div>
            </section>

            <div className="pt-6">
              <button 
                type="submit" 
                className="group relative w-full py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 tech-font tracking-[0.2em] overflow-hidden"
                style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0 30%)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <PowerIcon /> ESTABLISH CONNECTION // 提交原力選取
                </span>
                <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Success Modal Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative overflow-hidden border border-cyan-400 bg-[#0a1423] p-8 rounded-xl text-center max-w-xs w-full shadow-[0_0_50px_rgba(0,243,255,0.3)] animate-in fade-in zoom-in duration-300">
            <div className="scanline"></div>
            <div className="text-cyan-400 flex justify-center mb-4">
              <CheckCircleIcon size={64} />
            </div>
            <h2 className="tech-font text-xl mb-2 text-white">DATA SYNCED</h2>
            <p className="text-gray-400 text-sm mb-6">原力數據已同步至中心伺服器</p>
            <button 
              onClick={handleReset}
              className="w-full py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all tech-font text-xs"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              重新加載 / SYSTEM REBOOT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

interface ChoiceItemProps {
  id: string;
  name: string;
  value: string;
  title: string;
  description: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChoiceItem: React.FC<ChoiceItemProps> = ({ id, name, value, title, description, checked, onChange }) => {
  return (
    <div className="relative">
      <input 
        type="radio" 
        name={name} 
        value={value} 
        id={id} 
        className="hidden" 
        required 
        checked={checked}
        onChange={onChange}
      />
      <label 
        htmlFor={id} 
        className={`block cursor-pointer p-4 rounded border transition-all duration-300 ${
          checked 
            ? 'bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(188,19,254,0.3)]' 
            : 'bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5'
        }`}
      >
        <div className={`font-bold transition-colors ${checked ? 'text-purple-400' : 'text-cyan-300'}`}>
          {title}
        </div>
        <div className="text-xs text-gray-500 mt-1">{description}</div>
        {checked && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500 animate-pulse">
            <CheckCircleIcon size={20} />
          </div>
        )}
      </label>
    </div>
  );
};

export default App;
