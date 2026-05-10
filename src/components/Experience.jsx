import React, { useState, useEffect } from 'react';
import { getExperience } from '../api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExperience()
      .then(res => {
        setExperiences(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching experience:", err);
        setLoading(false);
      });
  }, []);

  if (loading || experiences.length === 0) return null;

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Work <span className="text-accent">Experience</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          My professional journey and the impact I've made in various roles.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:bg-white/5">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/30 bg-bg-main text-accent absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-sm">work</span>
            </div>

            {/* Content Panel */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-8 ml-auto md:ml-0">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                  <p className="text-accent font-mono text-xs uppercase tracking-widest">{exp.company}</p>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-text-muted uppercase">
                  {exp.duration}
                </div>
              </div>
              <p className="text-text-muted leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
