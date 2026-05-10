import React from 'react';

const Expertise = () => {
  // Static expertise areas that stay consistent regardless of dashboard changes
  const expertiseAreas = [
    {
      name: "Frontend Basics",
      description: "Crafting responsive and interactive web interfaces. Focusing on semantic HTML, modern CSS (Tailwind), and dynamic JavaScript logic.",
      icon_class: "code"
    },
    {
      name: "Python Scripting",
      description: "Developing scripts and small applications using Python. Learning data manipulation, API integration, and backend fundamentals.",
      icon_class: "terminal"
    },
    {
      name: "React Ecosystem",
      description: "Exploring component-based architecture with React. Working on state management, hooks, and routing.",
      icon_class: "rocket_launch"
    },
    {
      name: "Problem Solving",
      description: "Applying an engineering mindset to software challenges. Breaking down complex problems into manageable, logical steps.",
      icon_class: "psychology"
    }
  ];

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
        {expertiseAreas.map((skill, index) => (
          <div key={index} className="glass-panel p-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-accent text-2xl">{skill.icon_class || 'code'}</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">{skill.name}</h3>
            <p className="text-text-muted leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;

