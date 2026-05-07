const Experience = () => {
  return (
    <section className="px-margin max-w-7xl mx-auto py-xl">
      <h2 className="font-headline-lg text-headline-lg mb-xl text-on-surface flex items-center gap-md">
        Career Contour{" "}
        <span className="h-px flex-grow bg-gradient-to-r from-tertiary/50 to-transparent"></span>
      </h2>
      <div className="relative pl-8 border-l border-on-surface/10 space-y-xl">
        {/* Timeline Item 1 */}
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-tertiary bioluminescent-glow"></div>
          <div>
            <span className="font-label-mono text-label-mono text-tertiary mb-xs block">
              DEC 2025 — PRESENT
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Lecturer
            </h3>
            <p className="text-primary font-body-md mb-sm">
              Dayalbagh Educational Institute
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Educating future engineers on the intricacies of electrical
              systems, bridging the gap between academic theory and industrial
              practice through immersive lab experiences.
            </p>
          </div>
        </div>
        {/* Timeline Item 2 */}
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-surface-container-high border-2 border-tertiary/50"></div>
          <div>
            <span className="font-label-mono text-label-mono text-on-surface-variant mb-xs block">
              MAY 2022 — DEC 2025
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Project Assistant (DEVISE)
            </h3>
            <p className="text-primary font-body-md mb-sm">
              Dayalbagh Educational Institute
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Spearheaded technical documentation and experimental setups for the
              DEVISE project, ensuring precision in electrical measurements and
              project milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
