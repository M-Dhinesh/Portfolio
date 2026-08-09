import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Particles background */}
      <ParticlesBackground />

      {/* Glow orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label mb-4 block">Software Developer / Data Engineer</span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Dhinesh</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Versatile engineer with hands-on experience in Software Development (Django, ReactJS, Node.js) and Data Engineering (PL/SQL and Python). I design scalable web applications, APIs, and interactive dashboards while building robust ETL workflows and ensuring data quality across distributed systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 blur-sm" />
              <img
                src={profileImg}
                alt="Dhinesh M"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-heading uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
