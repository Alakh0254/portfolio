const Profile = () => {
  return (
    <section className="px-margin max-w-7xl mx-auto py-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="md:col-span-2 glass-card p-lg rounded-xl border border-tertiary/10 relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl"></div>
          <span className="material-symbols-outlined text-tertiary mb-md text-4xl">
            dynamic_form
          </span>
          <h2 className="font-headline-md text-headline-md mb-sm text-on-surface">
            Profile Synopsis
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Extensive association with{" "}
            <span className="text-tertiary">Dayalbagh Educational Institute</span>
            , focused on practical application of electrical principles. Key
            contributor to the <span className="text-primary">DEVISE project</span>
            , demonstrating leadership in collaborative technical environments.
          </p>
        </div>
        <div className="glass-card p-lg rounded-xl border border-primary/10 flex flex-col justify-center text-center">
          <span className="font-headline-xl text-headline-xl text-tertiary">
            5+
          </span>
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
            Projects Completed
          </span>
        </div>
        <div className="glass-card p-lg rounded-xl border border-outline/10 group hover:border-tertiary/30 transition-colors">
          <span className="material-symbols-outlined text-tertiary mb-sm">
            simulation
          </span>
          <h3 className="font-label-mono text-label-mono text-on-surface font-bold mb-xs uppercase">
            Core Expertise
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Expertise in MATLAB and Simulink for advanced power system modeling
            and simulation.
          </p>
        </div>
        <div className="glass-card p-lg rounded-xl border border-outline/10 group hover:border-tertiary/30 transition-colors">
          <span className="material-symbols-outlined text-tertiary mb-sm">
            architecture
          </span>
          <h3 className="font-label-mono text-label-mono text-on-surface font-bold mb-xs uppercase">
            Practical Innovation
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Translating theoretical electrical concepts into robust
            organizational growth strategies.
          </p>
        </div>
        <div className="glass-card p-lg rounded-xl border border-outline/10 group hover:border-tertiary/30 transition-colors">
          <span className="material-symbols-outlined text-tertiary mb-sm">
            groups
          </span>
          <h3 className="font-label-mono text-label-mono text-on-surface font-bold mb-xs uppercase">
            Institutional Roots
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Lifelong learner and contributor at the prestigious Dayalbagh
            Educational Institute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
