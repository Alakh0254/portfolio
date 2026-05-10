import React, { useState, useEffect } from 'react';
import { getAboutSection } from '../api';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutSection()
      .then(res => {
        setAbout(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching about section:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !about) return null;

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto" id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 glass-panel p-2">
            <img 
              src={about.image_url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 border border-accent/20 rounded-2xl -z-10 animate-pulse"></div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              {about.title || "About Me"}
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-text-muted text-lg leading-relaxed whitespace-pre-line">
              {about.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            {about.location && (
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest opacity-70">Location</span>
                <p className="text-white font-medium">{about.location}</p>
              </div>
            )}
            {about.email && (
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest opacity-70">Email</span>
                <p className="text-white font-medium">{about.email}</p>
              </div>
            )}
          </div>

          {about.resume_url && (
            <div className="pt-4">
              <a 
                href={about.resume_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all group"
              >
                Download Resume
                <span className="material-symbols-outlined text-accent group-hover:translate-y-1 transition-transform">download</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
