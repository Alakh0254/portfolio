import React, { useState, useEffect } from 'react';
import { getPersonalProfile, getSocialLinks } from '../api';

const Contact = () => {
  const [profile, setProfile] = useState(null);
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPersonalProfile(), getSocialLinks()])
      .then(([profileRes, socialsRes]) => {
        setProfile(profileRes.data);
        setSocials(socialsRes.data);
      })
      .catch(err => console.error("Contact Load Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 container-custom">
        <div className="skeleton h-64 w-full rounded-2xl"></div>
      </section>
    );
  }

  return (
    <section className="relative py-24 border-t border-white/5" id="contact">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="pill border-accent/20 text-accent bg-accent/5 mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let's Start a <br/>
            <span className="text-accent">Conversation</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and collaborations. If you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Dossier Card */}
          <div className="lg:col-span-1 glass-panel p-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">fingerprint</span>
              Dossier
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Name', value: profile?.name },
                { label: 'Role', value: profile?.title },
                { label: 'D.O.B', value: profile?.date_of_birth },
                { label: 'Nationality', value: profile?.nationality },
                { label: 'Location', value: profile?.location }
              ].map(item => (
                <div key={item.label} className="border-b border-white/5 pb-4">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-medium">{item.value || 'N/A'}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href={`mailto:${profile?.email}`} className="glass-panel p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-accent/5">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-accent text-3xl">mail</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Email Me</h4>
              <p className="text-text-muted text-sm break-all">{profile?.email}</p>
            </a>

            <a href={`tel:${profile?.phone}`} className="glass-panel p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-accent/5">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-accent text-3xl">call</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Call Me</h4>
              <p className="text-text-muted text-sm">{profile?.phone}</p>
            </a>

            {socials.map(social => (
              <a 
                key={social.id} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                className="glass-panel p-8 flex items-center gap-6 group hover:bg-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center group-hover:bg-accent group-hover:text-bg-main transition-all duration-500">
                  <span className="material-symbols-outlined">{social.icon_class || 'link'}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">{social.platform}</h4>
                  <p className="text-text-muted text-xs">Professional Profile</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Branding */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded bg-card-bg border border-accent/20 flex items-center justify-center text-accent text-xl font-bold tracking-tighter">
              AS
            </span>
            <div className="text-left">
              <h5 className="font-bold text-white tracking-tighter">AS.DEV</h5>
              <p className="text-[10px] text-text-muted font-mono uppercase tracking-widest">&copy; 2024 Engineering Portfolio</p>
            </div>
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-text-muted uppercase tracking-widest">
            <a href="#hero" className="hover:text-accent transition-colors">Hero</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
