import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5" id="contact">
      <div className="text-center mb-16">
        <div className="pill border-accent/30 text-accent bg-accent/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
          OPEN FOR OPPORTUNITIES
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Let's Build <span className="text-accent">The Future</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Passionate about learning and ready to contribute to real-world projects. Eager to bring my engineering mindset to a dynamic software team.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Personal Dossier */}
        <div className="glass-panel p-8 md:p-12">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-accent">fingerprint</span>
            Personal Dossier
          </h3>
          <ul className="space-y-6 text-text-muted">
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span className="font-mono text-sm uppercase tracking-wider text-white">Date of Birth</span>
              <span>12/03/2001</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span className="font-mono text-sm uppercase tracking-wider text-white">Father's Name</span>
              <span>Sanjiv Kumar Singh</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span className="font-mono text-sm uppercase tracking-wider text-white">Nationality</span>
              <span>Indian</span>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-2 gap-6">
          {/* Email */}
          <a href="mailto:alakh0254@gmail.com" className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-accent text-3xl mb-4 group-hover:scale-110 transition-transform">mail</span>
            <h3 className="font-bold text-white mb-2">Email</h3>
            <p className="text-text-muted text-xs break-all">alakh0254@gmail.com</p>
          </a>

          {/* Phone */}
          <a href="tel:8006578823" className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-accent text-3xl mb-4 group-hover:scale-110 transition-transform">call</span>
            <h3 className="font-bold text-white mb-2">Phone</h3>
            <p className="text-text-muted text-xs">+91 8006578823</p>
          </a>

          {/* LinkedIn */}
          <a href="#" className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-accent text-3xl mb-4 group-hover:scale-110 transition-transform">work</span>
            <h3 className="font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-text-muted text-xs">Connect</p>
          </a>

          {/* GitHub */}
          <a href="#" className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-accent text-3xl mb-4 group-hover:scale-110 transition-transform">code</span>
            <h3 className="font-bold text-white mb-2">GitHub</h3>
            <p className="text-text-muted text-xs">Follow</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
