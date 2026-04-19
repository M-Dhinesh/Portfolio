import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import tourismImg from "@/assets/project-tourism.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import classificationImg from "@/assets/project-Streamlit.jpg";

const projects = [
  {
    title: "E-commerce Website",
    description: "Full-stack e-commerce platform with payment integration, user authentication, and interactive product dashboards. Built with Django backend and ReactJS frontend.",
    image: portfolioImg,
    github: "https://github.com/M-Dhinesh",
    tags: ["Django", "React", "MongoDB", "Docker", "RazorPay", "Github Copilot"],
  },
  {
    title: "Detection of Arrhythmia",
    description: "Machine learning project for detecting cardiac arrhythmias using signal processing and classification algorithms with pandas and numpy.",
    image: classificationImg,
    github: "https://github.com/M-Dhinesh",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Data Science"],
  },
  {
    title: "Electricity Bill Management System",
    description: "Enterprise-level billing system built with Java technologies for managing and tracking electricity consumption and billing operations.",
    image: tourismImg,
    github: "https://github.com/M-Dhinesh",
    tags: ["Java", "JSP", "Derby", "Apache Tomcat", "Backend"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-heading mt-2 mb-14">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden group hover-lift"
            >
              {project.image && (
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-heading">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary font-heading font-medium hover:underline"
                  >
                    <Github size={15} /> GitHub <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/M-Dhinesh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-heading font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all"
          >
            View All Projects <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
