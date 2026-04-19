import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Tech Data Science & Engineering (WILP)",
    institution: "Birla Institute of Technology And Science (BITS Pilani)",
    year: "October 2025 – Present",
    grade: "Pursuing",
  },
  {
    degree: "B.E Computer Science and Engineering",
    institution: "P.A. College of Engineering and Technology",
    year: "July 2019 – May 2023",
    grade: "Completed",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-heading mt-2 mb-14">Academic Background</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 items-center justify-center z-10">
                  <GraduationCap size={16} className="text-primary" />
                </div>
                <div className="glass-card p-6 flex-1 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-xs font-heading font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm font-medium text-primary">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
