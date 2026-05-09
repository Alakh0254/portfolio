import React, { useState, useEffect } from 'react';
import { getAchievements } from '../api';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAchievements()
      .then(res => {
        setAchievements(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching achievements:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5" id="achievements">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Milestones & <span className="text-accent">Growth</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Tracking my progress as I dive deeper into software development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="glass-panel p-8">
            <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-accent text-xl">
                {achievement.title.toLowerCase().includes('engineering') ? 'school' : 
                 achievement.title.toLowerCase().includes('code') ? 'local_fire_department' : 'folder_special'}
              </span>
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-xs font-mono text-accent mb-4">{achievement.issuer || 'Achievement'}</p>
            <p className="text-text-muted text-sm leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
        {achievements.length === 0 && (
          <div className="col-span-full text-center py-12 opacity-50 font-mono text-sm">
            No milestones recorded yet. Initializing growth sequence...
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
