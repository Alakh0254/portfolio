import React, { useState, useEffect } from 'react';
import { getExperience } from '../api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExperience()
      .then(res => setExperiences(res.data))
      .catch(err => console.error("Experience Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom" id="experience">
        <div className="skeleton h-10 w-64 mb-12"></div>
        <div className="space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="skeleton h-40 w-full rounded-2xl"></div>
          ))}
        </div>
      </section>
    );
  }

  if (experiences.length === 0) return null;

  return (
    <section className="py-24 bg-card-bg/10" id="experience">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-accent">Journey</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl">
              A timeline of my professional growth, technical contributions, and impact across different organizations.
            </p>
          </div>
          <div className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
            // Experience.log
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line for larger screens */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Central Dot */}
                <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 w-4 h-4 rounded-full bg-bg-main border-2 border-accent z-10 -translate-x-1/2 -translate-y-1/2 hidden md:block ring-8 ring-accent/5"></div>
                
                {/* Content Panel */}
                <div className="w-full md:w-[45%]">
                  <div className="glass-panel p-8 hover:border-accent/40 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-accent uppercase tracking-widest">{exp.duration}</span>
                      <span className="material-symbols-outlined text-white/20">work</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-accent font-medium mb-6">{exp.company}</h4>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for other side */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
