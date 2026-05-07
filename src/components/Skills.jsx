const Skills = () => {
  return (
    <section className="px-margin max-w-7xl mx-auto py-xl" id="skills">
      <h2 className="font-headline-lg text-headline-lg mb-xl text-on-surface">
        Technical Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-md">
        <div className="glass-card p-md rounded-xl text-center hover:translate-y-[-4px] transition-transform">
          <div className="w-12 h-12 bg-tertiary/10 rounded-lg mx-auto mb-md flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary">terminal</span>
          </div>
          <span className="font-label-mono text-label-mono text-on-surface uppercase">
            Python
          </span>
        </div>
        <div className="glass-card p-md rounded-xl text-center hover:translate-y-[-4px] transition-transform">
          <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-md flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">javascript</span>
          </div>
          <span className="font-label-mono text-label-mono text-on-surface uppercase">
            JavaScript
          </span>
        </div>
        <div className="glass-card p-md rounded-xl text-center hover:translate-y-[-4px] transition-transform">
          <div className="w-12 h-12 bg-tertiary/10 rounded-lg mx-auto mb-md flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary">memory</span>
          </div>
          <span className="font-label-mono text-label-mono text-on-surface uppercase">
            Simulink
          </span>
        </div>
        <div className="glass-card p-md rounded-xl text-center hover:translate-y-[-4px] transition-transform">
          <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-md flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">analytics</span>
          </div>
          <span className="font-label-mono text-label-mono text-on-surface uppercase">
            MATLAB R2025a
          </span>
        </div>
        <div className="glass-card p-md rounded-xl text-center hover:translate-y-[-4px] transition-transform">
          <div className="w-12 h-12 bg-tertiary/10 rounded-lg mx-auto mb-md flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary">workspaces</span>
          </div>
          <span className="font-label-mono text-label-mono text-on-surface uppercase">
            MS-Office
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
