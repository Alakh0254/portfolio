import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-main/80 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2 font-heading font-extrabold text-xl tracking-tight text-white">
          <span className="w-8 h-8 rounded bg-card-bg border border-accent/30 flex items-center justify-center text-accent">
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </span>
          AS.DEV
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="text-text-muted hover:text-accent transition-colors" href="#expertise">Expertise</a>
          <a className="text-text-muted hover:text-accent transition-colors" href="#projects">Projects</a>
          <a className="text-text-muted hover:text-accent transition-colors" href="#achievements">Achievements</a>
          <a className="text-text-muted hover:text-accent transition-colors" href="#scholastics">Academic</a>
          <a className="text-text-muted hover:text-accent transition-colors" href="#contact">Contact</a>
        </div>

        <a 
          href="/resume.pdf" 
          download="Alakh_Singh_Resume.pdf"
          className="px-5 py-2 bg-transparent text-accent rounded-lg text-sm font-bold border border-accent/20 hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
