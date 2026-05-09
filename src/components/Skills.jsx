import React, { useState, useEffect } from 'react';
import { getSkills } from '../api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSkills()
      .then(res => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching skills", err);
        setError("Failed to load skills.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="px-margin max-w-7xl mx-auto py-xl" id="skills">
      <h2 className="font-headline-lg text-headline-lg mb-xl text-on-surface">
        Technical Stack
      </h2>
      
      {loading && <p className="text-tertiary">Loading skills...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-md">
          {skills.map(skill => (
            <div key={skill.id} className="glass-card p-md rounded-xl text-center hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg mx-auto mb-md flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">{skill.icon_class || 'terminal'}</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface uppercase">
                {skill.name}
              </span>
            </div>
          ))}
          {skills.length === 0 && <p className="text-on-surface-variant col-span-5 text-center">No skills available.</p>}
        </div>
      )}
    </section>
  );
};

export default Skills;
