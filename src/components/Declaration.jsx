const Declaration = () => {
  return (
    <section className="px-margin max-w-7xl mx-auto py-xl pb-32">
      <div className="glass-card p-lg rounded-2xl text-center max-w-3xl mx-auto border border-outline/10">
        <span
          className="material-symbols-outlined text-primary mb-md"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          verified
        </span>
        <h2 className="font-label-mono text-label-mono mb-md text-on-surface-variant uppercase tracking-[0.3em]">
          Official Declaration
        </h2>
        <p className="font-body-md text-body-md italic text-on-surface-variant mb-xl leading-relaxed">
          "I hereby declare that the information given above is true and correct
          to the best of my knowledge and belief."
        </p>
        <div className="pt-lg border-t border-on-surface/5">
          <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-sm"></div>
          <span className="font-headline-md text-on-surface italic">
            Alakh Singh
          </span>
        </div>
      </div>
    </section>
  );
};

export default Declaration;
