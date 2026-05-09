import React from 'react';

const Achievements = () => {
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
        {/* Achievement 1 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-xl">school</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">Engineering Transition</h3>
          <p className="text-xs font-mono text-accent mb-4">Electrical to Software</p>
          <p className="text-text-muted text-sm leading-relaxed">
            Successfully bridging the gap between hardware knowledge and software engineering. Applying logical circuit concepts to code architecture and algorithms.
          </p>
        </div>

        {/* Achievement 2 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-xl">local_fire_department</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">100 Days of Code</h3>
          <p className="text-xs font-mono text-accent mb-4">Self-Driven Learning</p>
          <p className="text-text-muted text-sm leading-relaxed">
            Committed to consistent daily learning. Built multiple small projects, solved logic puzzles, and consistently improved my foundational coding skills.
          </p>
        </div>

        {/* Achievement 3 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-xl">folder_special</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">First Full-Stack App</h3>
          <p className="text-xs font-mono text-accent mb-4">Milestone Reached</p>
          <p className="text-text-muted text-sm leading-relaxed">
            Successfully connected a frontend interface with a backend API. Learned the intricacies of data fetching, state management, and CORS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
