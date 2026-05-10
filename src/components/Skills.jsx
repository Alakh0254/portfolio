import React, { useState, useEffect } from 'react';
import { getSkills } from '../api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills()
      .then(res => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);

  if (loading && skills.length === 0) return null;
  if (!loading && skills.length === 0) return null;

  // Group skills by category if needed, or just show them in a grid
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] mb-2">Technical Proficiency</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            Technical <span className="text-accent italic">Stack</span>
          </h2>
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-accent/50 to-transparent hidden md:block mb-4 ml-8"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.id || index} className="glass-panel p-6 group hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
              <span className="material-symbols-outlined text-accent text-2xl group-hover:scale-110 transition-transform">
                {skill.icon_class || 'terminal'}
              </span>
            </div>
            <h3 className="text-sm font-mono text-white uppercase tracking-wider mb-2">{skill.name}</h3>
            {skill.proficiency && (
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            )}
            <p className="text-[10px] text-text-muted mt-2 opacity-60 uppercase">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
