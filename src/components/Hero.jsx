import React, { useState, useEffect } from 'react';
import { getPersonalProfile, getSkills } from '../api';

const Hero = () => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPersonalProfile(), getSkills()])
      .then(([profileRes, skillsRes]) => {
        setProfile(profileRes.data);
        setSkills(skillsRes.data);
      })
      .catch(err => console.error("Hero Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center pt-20" id="hero">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="skeleton h-6 w-32 rounded-full"></div>
            <div className="skeleton h-24 w-full"></div>
            <div className="skeleton h-32 w-3/4"></div>
            <div className="flex gap-4">
              <div className="skeleton h-12 w-40"></div>
              <div className="skeleton h-12 w-40"></div>
            </div>
          </div>
          <div className="skeleton h-96 w-full rounded-2xl hidden lg:block"></div>
        </div>
      </section>
    );
  }

  // Handle empty state gracefully
  if (!profile) return null;

  const nameParts = profile.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24" id="hero">
      <div className="flex-grow flex items-center px-6 max-w-7xl mx-auto w-full pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="pill border-accent/20 text-accent bg-accent/5">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Available For New Challenges
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-white leading-[0.9] uppercase tracking-tighter">
              {firstName} <br className="hidden md:block"/>
              <span className="text-text-muted">{lastName}</span>
            </h1>
            
            <div className="space-y-4 max-w-lg">
              <h2 className="text-2xl font-heading text-accent/80 font-medium">{profile.title}</h2>
              <p className="text-text-muted text-lg leading-relaxed font-mono opacity-80">
                &gt; {profile.tagline}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn-primary">Explore Work</a>
              <a href="#contact" className="btn-secondary">Let's Talk</a>
            </div>
          </div>

          {/* Right Code Window */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <div className="rounded-xl overflow-hidden bg-code-bg shadow-2xl border border-white/5 group">
              {/* Window Header */}
              <div className="bg-code-header px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest opacity-50">portfolio.sh</span>
              </div>
              {/* Code Body */}
              <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
                <div className="text-accent/50 mb-2">// System Initialization</div>
                <div><span className="text-accent">const</span> <span className="text-white">developer</span> = <span className="text-[#e5c07b]">{'{'}</span></div>
                <div className="pl-6"><span className="text-[#61afef]">name:</span> <span className="text-[#98c379]">"{profile.name}"</span>,</div>
                <div className="pl-6"><span className="text-[#61afef]">role:</span> <span className="text-[#98c379]">"{profile.title}"</span>,</div>
                <div className="pl-6"><span className="text-[#61afef]">focus:</span> <span className="text-[#98c379]">"Scalable Architectures"</span>,</div>
                <div className="pl-6"><span className="text-[#61afef]">skills:</span> <span className="text-[#abb2bf]">[</span></div>
                <div className="pl-12">
                  {skills.slice(0, 4).map((s, i) => (
                    <span key={s.id}>
                      <span className="text-[#98c379]">"{s.name}"</span>
                      {i < 3 && <span className="text-white">, </span>}
                    </span>
                  ))}
                </div>
                <div className="pl-6"><span className="text-[#abb2bf]">]</span></div>
                <div><span className="text-[#e5c07b]">{'}'}</span>;</div>
                <div className="mt-4 animate-pulse inline-block w-2 h-4 bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic Tech Scroll */}
      <div className="w-full bg-card-bg/30 border-y border-white/5 py-6 hidden md:block overflow-hidden">
        <div className="flex justify-around items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {skills.slice(0, 6).map(skill => (
            <div key={skill.id} className="flex items-center gap-3 text-sm font-mono tracking-widest uppercase">
              <span className="material-symbols-outlined text-accent">{skill.icon_class || 'terminal'}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
