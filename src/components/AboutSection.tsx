import { motion } from "framer-motion";
import { 
  Code2, Database, BarChart3, Globe, Zap, Cpu, Brain, GitBranch, Sparkles, Wrench,
  Coffee, TrendingUp, Monitor, Wand2
} from "lucide-react";

// Skill icon mapping using Lucide icons
const skillIcons: { [key: string]: React.ReactNode } = {
  "Python": <Code2 size={20} className="text-blue-500" />,
  "Java": <Coffee size={20} className="text-orange-600" />,
  "C#": <Code2 size={20} className="text-purple-600" />,
  "PL/SQL": <Database size={20} className="text-gray-700" />,
  "Django": <Globe size={20} className="text-green-700" />,
  "React JS": <Monitor size={20} className="text-cyan-500" />,
  "Node.js": <Code2 size={20} className="text-green-600" />,
  "MongoDB": <Database size={20} className="text-green-500" />,
  "Postman": <Code2 size={20} className="text-orange-500" />,
  "PySpark": <Zap size={20} className="text-red-500" />,
  "Pandas": <BarChart3 size={20} className="text-blue-600" />,
  "NumPy": <BarChart3 size={20} className="text-blue-600" />,
  "Machine Learning": <Brain size={20} className="text-purple-500" />,
  "Power BI": <TrendingUp size={20} className="text-yellow-600" />,
  "Git": <GitBranch size={20} className="text-red-700" />,
  "GitHub Copilot": <Sparkles size={20} className="text-gray-800" />,
  "Claude Code": <Code2 size={20} className="text-amber-600" />,
  "Prompt Engineering": <Wand2 size={20} className="text-pink-500" />,
  "LLM": <Brain size={20} className="text-indigo-500" />,
  "Jira": <Wrench size={20} className="text-blue-700" />,
  "RAG": <Wrench size={20} className="text-purple-500" />,
  "Data Analysis": <BarChart3 size={20} className="text-teal-600" />,
};

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "PL/SQL" }
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: [
      { name: "Django" },
      { name: "React JS" },
      { name: "Node.js" },
      { name: "MongoDB" }
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    items: [
      { name: "PySpark" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Power BI" }
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Collaboration",
    items: [
      { name: "Git" },
      { name: "Postman" },
      { name: "Jira" },
      { name: "GitHub Copilot" },
      { name: "Claude Code" },
    ],
  },
  {
    icon: Wand2,
    title: "AI & LLM",
    items: [
      { name: "Prompt Engineering" },
      { name: "LLM" },
      { name: "Machine Learning" },
      { name: "RAG" }
    ],
  },
];

const AboutSection = () => {
  // Flatten all skills from categories
  const allSkills = skillCategories.flatMap(cat => cat.items);

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-heading mt-2 mb-6">Who I Am</h2>
          <p className="text-muted-foreground leading-relaxed mb-14">
            Versatile engineer with hands-on experience in Software Development (Django, ReactJS, Node.js) and Data Engineering (PL/SQL and Python). I design scalable web applications, RESTful APIs, and interactive dashboards while building robust ETL workflows, optimizing queries, and ensuring data quality across distributed systems. Passionate about integrating software solutions with data pipelines to deliver end-to-end systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all group"
              >
                <span className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  {skillIcons[skill.name] || <Code2 size={16} />}
                </span>
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skillCategories.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{skill.title}</h3>
              <div className="space-y-3">
                {skill.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {skillIcons[item.name] || <Code2 size={20} />}
                    </div>
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
