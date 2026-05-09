import React from 'react';

const Expertise = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="expertise">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          My <span className="text-accent">Expertise</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Building a strong foundation across the core web technology stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Expertise 1 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-2xl">code</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">Frontend Basics</h3>
          <p className="text-text-muted leading-relaxed">
            Crafting responsive and interactive web interfaces. Focusing on semantic HTML, modern CSS (Tailwind), and dynamic JavaScript logic to build user-friendly applications.
          </p>
        </div>

        {/* Expertise 2 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-2xl">terminal</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">Python Scripting</h3>
          <p className="text-text-muted leading-relaxed">
            Developing scripts and small applications using Python. Learning data manipulation, API integration, and backend fundamentals to solve logical problems.
          </p>
        </div>

        {/* Expertise 3 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-2xl">rocket_launch</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">React Ecosystem</h3>
          <p className="text-text-muted leading-relaxed">
            Exploring component-based architecture with React. Working on state management, hooks, and routing to create single-page applications (like this portfolio!).
          </p>
        </div>

        {/* Expertise 4 */}
        <div className="glass-panel p-8">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-accent text-2xl">psychology</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">Problem Solving</h3>
          <p className="text-text-muted leading-relaxed">
            Applying an engineering mindset from my electrical background to software challenges. Breaking down complex problems into manageable, logical steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
