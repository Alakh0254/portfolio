import React, { useState, useEffect } from 'react';
import { getProjects } from '../api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

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
        {projects.map((project) => (
          <div key={project.id} className="glass-panel p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-2xl">
                  {project.tags?.toLowerCase().includes('backend') ? 'terminal' : 
                   project.tags?.toLowerCase().includes('api') ? 'cloud' : 'web'}
                </span>
              </div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                {project.tags?.split(',')[0] || 'Development'}
              </span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-3">{project.title}</h3>
            <p className="text-text-muted leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-accent mb-6">
              {project.tags?.split(',').map(tag => (
                <span key={tag} className="px-2 py-1 bg-accent/10 rounded">#{tag.trim()}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-lg">code</span> Code
                </a>
              )}
              {project.live_link && (
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-lg">visibility</span> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
