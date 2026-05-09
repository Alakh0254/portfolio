import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24" id="hero">
      <div className="flex-grow flex items-center px-6 max-w-7xl mx-auto w-full pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="pill border-accent/30 text-accent bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Available For Hire
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-white leading-tight">
              ALAKH <br className="hidden md:block"/>
              <span className="text-text-muted">SINGH</span>
            </h1>
            
            <div className="bg-card-bg p-6 rounded-2xl border border-white/5 max-w-lg">
              <h2 className="text-2xl font-heading text-accent mb-3">Aspiring Software Engineer</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Transitioning from Electrical Engineering to Software Development. Passionate about learning, building clean interfaces, and crafting scalable digital experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-8 py-3 bg-accent text-bg-main font-bold rounded-lg hover:bg-accent-dark transition-colors">
                View Projects
              </a>
              <a href="/resume.pdf" download="Alakh_Singh_Resume.pdf" className="px-8 py-3 bg-card-bg text-white border border-white/10 font-bold rounded-lg hover:bg-white/5 transition-colors">
                View Resume
              </a>
            </div>
          </div>

          {/* Right Code Window */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <div className="rounded-xl overflow-hidden bg-code-bg shadow-2xl border border-white/10">
              {/* Window Header */}
              <div className="bg-code-header px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-text-muted font-mono">portfolio.config.ts</span>
              </div>
              {/* Code Body */}
              <div className="p-6 font-mono text-sm leading-loose overflow-x-auto">
                <div><span className="token-keyword">const</span> <span className="token-function">engineer</span> <span className="token-punctuation">=</span> <span className="token-keyword">new</span> <span className="token-function">SoftwareEngineer</span><span className="token-punctuation">(</span><span className="token-punctuation">{'{'}</span></div>
                <div className="pl-4"><span className="token-property">name:</span> <span className="token-string">"Alakh Singh"</span><span className="token-punctuation">,</span></div>
                <div className="pl-4"><span className="token-property">role:</span> <span className="token-string">"Aspiring Software Developer"</span><span className="token-punctuation">,</span></div>
                <div className="pl-4"><span className="token-property">background:</span> <span className="token-string">"Electrical Engineering"</span><span className="token-punctuation">,</span></div>
                <div className="pl-4"><span className="token-property">skills:</span> <span className="token-punctuation">[</span></div>
                <div className="pl-8"><span className="token-string">"JavaScript"</span><span className="token-punctuation">,</span> <span className="token-string">"React"</span><span className="token-punctuation">,</span> <span className="token-string">"Python"</span><span className="token-punctuation">,</span></div>
                <div className="pl-8"><span className="token-string">"HTML/CSS"</span><span className="token-punctuation">,</span> <span className="token-string">"Tailwind CSS"</span></div>
                <div className="pl-4"><span className="token-punctuation">]</span><span className="token-punctuation">,</span></div>
                <div className="pl-4"><span className="token-property">focus:</span> <span className="token-string">"Continuous Learning & Building"</span></div>
                <div><span className="token-punctuation">{'}'}</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span></div>
                <br/>
                <div><span className="token-comment">// Initializing portfolio...</span></div>
                <div className="animate-pulse w-2 h-4 bg-accent mt-1 inline-block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Tech Bar */}
      <div className="w-full bg-card-bg border-t border-white/5 py-4 hidden md:block mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-text-muted text-sm font-mono">
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-lg">code</span> React.js</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-lg">javascript</span> JavaScript</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-lg">terminal</span> Python</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-lg">css</span> Tailwind CSS</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-accent text-lg">html</span> HTML5</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
