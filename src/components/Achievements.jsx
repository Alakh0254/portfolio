import React, { useState, useEffect } from 'react';
import { getAchievements } from '../api';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAchievements()
      .then(res => setAchievements(res.data))
      .catch(err => console.error("Achievements Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom" id="achievements">
        <div className="skeleton h-10 w-64 mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="skeleton h-48 w-full rounded-2xl"></div>
          ))}
        </div>
      </section>
    );
  }

  if (achievements.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden" id="achievements">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Milestones & <span className="text-accent">Growth</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            A track record of consistent learning, certifications, and key accomplishments in the field of software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(ach => (
            <div key={ach.id} className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:bg-accent group-hover:text-bg-main transition-colors duration-500">
                  <span className="material-symbols-outlined">emoji_events</span>
                </div>
                <span className="font-mono text-[10px] text-accent/50 uppercase tracking-widest">{ach.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{ach.title}</h3>
              <p className="text-accent/60 text-xs font-medium mb-4 uppercase tracking-tighter">{ach.issuer}</p>
              <p className="text-text-muted/80 text-sm leading-relaxed line-clamp-3">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Achievements;
