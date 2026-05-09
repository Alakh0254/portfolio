import React, { useState, useEffect } from 'react';
import { getProjects } from '../api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.error("Projects Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom" id="projects">
        <div className="skeleton h-10 w-64 mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map(i => (
            <div key={i} className="skeleton h-80 w-full rounded-2xl"></div>
          ))}
        </div>
      </section>
    );
  }

  if (projects.length === 0) return null;

  return (
    <section className="py-24 bg-card-bg/20" id="projects">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Selected <span className="text-accent">Projects</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl">
              Exploring the intersection of logic and creativity through functional, scalable web applications.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            <span className="w-4 h-1 bg-white/10 rounded-full"></span>
            <span className="w-4 h-1 bg-white/10 rounded-full"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map(project => (
            <div key={project.id} className="group relative">
              <div className="glass-panel overflow-hidden">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-bg-main">
                  {project.image_url ? (
                    <img 
                      src={project.image_url} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/5">
                      <span className="material-symbols-outlined text-6xl">broken_image</span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main to-transparent opacity-60"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.tags.split(',').map(tag => (
                      <span key={tag} className="px-3 py-1 bg-bg-main/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="pt-6 flex items-center gap-6">
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors">
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                        Live Demo
                      </a>
                    )}
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors">
                        <span className="material-symbols-outlined text-sm">code</span>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
