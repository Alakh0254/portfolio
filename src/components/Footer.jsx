const Footer = () => {
  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-on-surface/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin max-w-7xl mx-auto gap-md">
        <span className="font-headline-md text-headline-md text-tertiary">
          Alakh Singh
        </span>
        <p className="font-body-md text-body-md text-on-surface-variant">
          © 2024 Alakh Singh • Engineered for Precision
        </p>
        <div className="flex gap-lg">
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-all duration-300 hover:translate-y-[-2px]"
            href="#"
          >
            Terminal
          </a>
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-all duration-300 hover:translate-y-[-2px]"
            href="#"
          >
            Repository
          </a>
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-all duration-300 hover:translate-y-[-2px]"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
