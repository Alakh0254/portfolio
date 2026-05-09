import React, { useState, useEffect } from 'react';
import { getEducation } from '../api';

const Scholastics = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEducation()
      .then(res => {
        setEducation(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching education:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5" id="scholastics">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Academic <span className="text-accent">Background</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          My formal education and institutional roots.
        </p>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans">
            <thead>
              <tr className="bg-card-bg/50 border-b border-white/5 text-text-muted font-mono text-sm">
                <th className="p-6 uppercase tracking-wider">Qualification</th>
                <th className="p-6 uppercase tracking-wider">Year</th>
                <th className="p-6 uppercase tracking-wider">Institution</th>
              </tr>
            </thead>
            <tbody className="text-white divide-y divide-white/5">
              {education.map((edu) => (
                <tr key={edu.id} className="hover:bg-accent/5 transition-colors group">
                  <td className="p-6 font-bold text-accent group-hover:text-accent-dark transition-colors">{edu.degree}</td>
                  <td className="p-6 text-text-muted font-mono">{edu.duration}</td>
                  <td className="p-6 text-text-muted">{edu.institution}</td>
                </tr>
              ))}
              {education.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-12 text-center text-text-muted font-mono text-sm opacity-50">
                    Academic records not yet synchronized.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Scholastics;
