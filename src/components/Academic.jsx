import React, { useState, useEffect } from 'react';
import { getEducation } from '../api';

const Academic = () => {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEducation()
      .then(res => setEducationList(res.data))
      .catch(err => console.error("Education Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom" id="academic">
        <div className="skeleton h-10 w-64 mb-12"></div>
        <div className="skeleton h-64 w-full rounded-2xl"></div>
      </section>
    );
  }

  if (educationList.length === 0) return null;

  return (
    <section className="py-24" id="academic">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Academic <span className="text-accent">Background</span>
          </h2>
          
          <div className="space-y-12">
            {educationList.map((edu, index) => (
              <div key={edu.id} className="relative pl-12 group">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 group-last:bottom-auto group-last:h-8"></div>
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-accent/10 transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="glass-panel p-8 transition-all duration-500 group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-sm text-accent/60 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-text-muted font-medium mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">school</span>
                    {edu.institution}
                  </h4>
                  <p className="text-text-muted/80 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
