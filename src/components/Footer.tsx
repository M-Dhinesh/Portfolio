import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center mb-6 gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/M-Dhinesh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhineshpa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:dhinesh88825@gmail.com"
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>

      <div className="text-center border-t border-border pt-6">
        <p className="text-sm text-muted-foreground font-heading">
          © {new Date().getFullYear()} Dhinesh M. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
