import React, { useState, useEffect } from 'react';
import { getAboutSection } from '../api';

const Navbar = () => {
  const [resumeUrl, setResumeUrl] = useState('#');

  useEffect(() => {
    getAboutSection()
      .then(res => {
        if (res.data?.resume_url) setResumeUrl(res.data.resume_url);
      })
      .catch(err => console.error("Navbar Load Error", err));
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academic', href: '#academic' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-main/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-card-bg border border-white/10 flex items-center justify-center text-accent transition-all duration-500 group-hover:border-accent group-hover:rotate-[360deg]">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="text-xl font-heading font-black text-white tracking-tighter uppercase">AS.DEV</span>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-[0.2em] hover:text-accent transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2.5 bg-accent/5 text-accent border border-accent/20 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-bg-main transition-all duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
