import React, { useState, useEffect } from 'react';
import { getAboutSection } from '../api';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutSection()
      .then(res => setAbout(res.data))
      .catch(err => console.error("About Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="skeleton h-96 w-full rounded-2xl"></div>
          <div className="space-y-6">
            <div className="skeleton h-10 w-48"></div>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-24 w-3/4"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!about) return null;

  return (
    <section className="py-24" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Image / Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl group-hover:bg-accent/20 transition-all duration-700"></div>
            <div className="relative glass-panel overflow-hidden aspect-square md:aspect-video lg:aspect-square">
              {about.image_url ? (
                <img 
                  src={about.image_url} 
                  alt="About Me" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-card-bg">
                  <span className="material-symbols-outlined text-6xl text-white/5 font-thin">person</span>
                </div>
              )}
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {about.title}
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
              {about.description.split('\n').map((para, i) => (
                <p key={i} className="mb-4 last:mb-0">{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-2">Location</p>
                <p className="text-white font-medium">{about.location || 'Remote / India'}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-2">Email</p>
                <p className="text-white font-medium">{about.email || 'Contact via Footer'}</p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={about.resume_url} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary inline-flex items-center gap-3"
              >
                Download Resume
                <span className="material-symbols-outlined text-sm">download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
