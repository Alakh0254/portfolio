import React from 'react';

const Scholastics = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5" id="scholastics">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Academic <span className="text-accent">Background</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          My formal education and institutional roots at Dayalbagh Educational Institute.
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
              <tr className="hover:bg-accent/5 transition-colors group">
                <td className="p-6 font-bold text-accent group-hover:text-accent-dark transition-colors">B. Tech (Electrical)</td>
                <td className="p-6 text-text-muted font-mono">2026</td>
                <td className="p-6 text-text-muted">Dayalbagh Educational Institute</td>
              </tr>
              <tr className="hover:bg-accent/5 transition-colors group">
                <td className="p-6 font-bold text-accent group-hover:text-accent-dark transition-colors">Diploma</td>
                <td className="p-6 text-text-muted font-mono">2021</td>
                <td className="p-6 text-text-muted">Dayalbagh Educational Institute</td>
              </tr>
              <tr className="hover:bg-accent/5 transition-colors group">
                <td className="p-6 font-bold text-accent group-hover:text-accent-dark transition-colors">Intermediate</td>
                <td className="p-6 text-text-muted font-mono">2018</td>
                <td className="p-6 text-text-muted">Dayalbagh Educational Institute</td>
              </tr>
              <tr className="hover:bg-accent/5 transition-colors group">
                <td className="p-6 font-bold text-accent group-hover:text-accent-dark transition-colors">High School</td>
                <td className="p-6 text-text-muted font-mono">2016</td>
                <td className="p-6 text-text-muted">U.P Board</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Scholastics;
