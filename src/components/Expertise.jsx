import React, { useState, useEffect } from 'react';
import { getSkills } from '../api';

const Expertise = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills()
      .then(res => setSkills(res.data))
      .catch(err => console.error("Expertise Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom" id="expertise">
        <div className="skeleton h-10 w-48 mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="skeleton h-64 w-full rounded-2xl"></div>
          ))}
        </div>
      </section>
    );
  }

  // Handle empty state
  if (skills.length === 0) return null;

  // Group skills by category
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section className="py-24 relative overflow-hidden" id="expertise">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Synthesizing engineering principles with modern software architecture to build high-performance digital solutions.
            </p>
          </div>
          <div className="font-mono text-sm text-accent opacity-50 uppercase tracking-widest">
            // Technical Stack
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category} className="glass-panel p-8 group">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold tracking-tight">{category}</h3>
                <span className="material-symbols-outlined text-accent text-3xl opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                  layers
                </span>
              </div>
              <div className="space-y-6">
                {skills.filter(s => s.category === category).map(skill => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-white/90">{skill.name}</span>
                      <span className="font-mono text-accent/60 text-xs">{skill.proficiency}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Expertise;
