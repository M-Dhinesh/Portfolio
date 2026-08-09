import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import tourismImg from "@/assets/project-tourism.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import classificationImg from "@/assets/project-Streamlit.jpg";

const projects = [
  {
  title: "Classification Models with Streamlit",
  description:
    "Interactive Streamlit application for training and evaluating six classification algorithms on the Wine Quality dataset. Users can upload a CSV dataset, choose a model, and view performance metrics, a confusion matrix, and a classification report.",
  image: classificationImg,
  github: "https://github.com/M-Dhinesh/Classification_Models_with_Streamlit",
  tags: [
    "Python",
    "Streamlit",
    "Scikit-learn",
    "XGBoost",
    "Machine Learning",
  ],
},
{
  title: "MD Tourism",
  description:
    "Full-stack tourism management platform with a React interface and ASP.NET Core 6 REST APIs. It supports traveler and travel-agent accounts, JWT authentication, travel-package management, reservations with passenger details, feedback, and image uploads.",
  image: tourismImg,
  github: "https://github.com/M-Dhinesh/MD_Tourism",
  tags: [
    "React",
    "ASP.NET Core",
    "C#",
    "SQL Server",
    "Entity Framework Core",
  ],
},
{
  title: "Portfolio",
  description:
    "Responsive personal portfolio website built with React and TypeScript. It presents professional experience, education, achievements, projects, and contact links through animated, smooth-scrolling sections.",
  image: portfolioImg,
  github: "https://github.com/M-Dhinesh/Portfolio",
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
}
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
