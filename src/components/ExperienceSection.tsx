import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer / Data Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Oct 2023 – Mar 2026",
    type: "Chennai",
    description:
      "Designed and implemented enterprise workflows using Python Django and built RESTful APIs for seamless backend-frontend integration. Developed ReactJS dashboards and user interfaces ensuring responsive design, optimized performance, and smooth user experience. Built and optimized SQL data validation pipelines supporting API-driven workflows, ensuring reliable data flow across APIs, databases, and distributed systems. Extracted, cleaned, and transformed large production datasets using SQL and Python; automated recurring data checks and reporting to reduce manual effort and improve accuracy. Enhanced backend reliability by optimizing complex SQL queries, analyzing logs and API responses to troubleshoot bottlenecks, and validated outputs using Node.js, Postman, Jira, Nexus, and Git.",
    tech: ["Python", "Django", "ReactJS", "Node.js", "SQL", "PL/SQL", "Postman", "Jira", "Nexus", "Git", "Github Copilot"],
  },
  {
    role: "Data Analyst Intern",
    company: "Kanini Software Solutions",
    period: "Feb 2023 – Jun 2023",
    type: "Chennai",
    description:
      "Performed data cleaning, transformation, and analysis using SQL and Python to support internal analytics tasks. Automated recurring data checks and reporting workflows with Python, improving efficiency and accuracy. Assisted in building dashboards and visualizations with Power BI, enabling decision-making teams to track performance and trends effectively.",
    tech: ["Python", "SQL", "Power BI", "Data Analysis", "Git"]
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading mt-2 mb-14">Work History</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 items-center justify-center">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-heading font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.type}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-heading">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
