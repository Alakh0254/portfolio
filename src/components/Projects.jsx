import React from 'react';

const Projects = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Learning <span className="text-accent">Projects</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Hands-on applications built to master new technologies and concepts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="glass-panel p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-accent text-2xl">web</span>
            </div>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Frontend</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">Personal Portfolio</h3>
          <p className="text-text-muted leading-relaxed mb-6 flex-grow">
            A fully responsive, modern portfolio website built to showcase my transition into software engineering. Features a sleek dark theme, glassmorphic UI, and structured React components.
          </p>
          <div className="flex gap-2 font-mono text-xs text-accent">
            <span className="px-2 py-1 bg-accent/10 rounded">#React</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#Tailwind</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#Vite</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="glass-panel p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-accent text-2xl">cloud</span>
            </div>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">API Integration</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">Weather Dashboard</h3>
          <p className="text-text-muted leading-relaxed mb-6 flex-grow">
            A dynamic weather application that fetches real-time data from the OpenWeather API. Allows users to search for cities, view forecasts, and displays data using interactive elements.
          </p>
          <div className="flex gap-2 font-mono text-xs text-accent">
            <span className="px-2 py-1 bg-accent/10 rounded">#JavaScript</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#REST API</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#CSS</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="glass-panel p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-accent text-2xl">task_alt</span>
            </div>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Backend Basics</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">Task Management API</h3>
          <p className="text-text-muted leading-relaxed mb-6 flex-grow">
            A foundational backend project demonstrating CRUD operations. Built a lightweight RESTful API to manage tasks, utilizing JSON for data storage and testing with Postman.
          </p>
          <div className="flex gap-2 font-mono text-xs text-accent">
            <span className="px-2 py-1 bg-accent/10 rounded">#Python</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#Flask</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#JSON</span>
          </div>
        </div>

        {/* Project 4 */}
        <div className="glass-panel p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-accent text-2xl">quiz</span>
            </div>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Logic & DOM</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">Interactive Quiz App</h3>
          <p className="text-text-muted leading-relaxed mb-6 flex-grow">
            A vanilla JavaScript application testing logic and state management. Features multiple-choice questions, score tracking, and dynamic DOM manipulation without frameworks.
          </p>
          <div className="flex gap-2 font-mono text-xs text-accent">
            <span className="px-2 py-1 bg-accent/10 rounded">#HTML/CSS</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#JavaScript</span>
            <span className="px-2 py-1 bg-accent/10 rounded">#DOM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
