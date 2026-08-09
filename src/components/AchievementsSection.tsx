import { motion } from "framer-motion";
import { Trophy, ExternalLink, Award, Code, Sparkles } from "lucide-react";

const featuredPost = {
  title: "Databricks Certified Data Engineer Professional",
  url: "https://lnkd.in/p/grSTZrmy",
  description:
    "Shared my Databricks certification milestone and the learning journey behind becoming a certified data engineer in the cloud and analytics space.",
  tag: "Featured LinkedIn Post",
  tags: ["Databricks", "Data Engineering", "Certification"],
};

const platforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/dhinesh88825/",
    stats: [
      { label: "Problems Solved", value: "286+" },
      { label: "Easy", value: "117" },
      { label: "Medium", value: "138" },
      { label: "Hard", value: "31" },
    ],
    languages: ["Python3 – 216", "MySQL – 57", "C# – 8"],
    skills: ["Dynamic Programming", "Backtracking", "Hash Table", "Arrays", "Database"],
    badge: "100 Days Badge 2024",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/dhinesh88825",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Star Ratings", value: "5 Stars" },
      { label: "Certifications", value: "3" },
    ],
    badges: [
      { name: "Problem Solving", stars: 3 },
      { name: "Java", stars: 3 },
      { name: "Python", stars: 5 },
      { name: "SQL", stars: 5 },
    ],
    certifications: [
      { name: "Python (Basic)", url: "https://www.hackerrank.com/certificates/a14885c1e6a5" },
      { name: "Problem Solving (Basic)", url: "https://www.hackerrank.com/certificates/7bf1ad7e8c3c" },
      { name: "SQL (Basic)", url: "https://www.hackerrank.com/certificates/611a84a5a074" },
    ],
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-heading mt-2 mb-14">Coding Profiles</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 hover-lift"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">LeetCode</h3>
              </div>
              <a
                href={platforms[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1 font-heading"
              >
                Profile <ExternalLink size={13} />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {platforms[0].stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 mb-5">
              <Trophy size={15} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{platforms[0].badge}</span>
            </div>

            {/* Languages */}
            <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">Languages Used</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {platforms[0].languages.map((lang) => (
                <span key={lang} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                  {lang}
                </span>
              ))}
            </div>

            {/* Skills */}
            <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">Top Skills</h4>
            <div className="flex flex-wrap gap-2">
              {platforms[0].skills.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HackerRank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-8 hover-lift"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">HackerRank</h3>
              </div>
              <a
                href={platforms[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1 font-heading"
              >
                Profile <ExternalLink size={13} />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {platforms[1].stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-3">Badges</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {platforms[1].badges!.map((badge) => (
                <div key={badge.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
                  <span className="text-sm text-foreground font-medium">{badge.name}</span>
                  <span className="text-primary text-xs">{"★".repeat(badge.stars)}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-3">Verified Certifications</h4>
            <div className="space-y-2">
              {platforms[1].certifications!.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-primary" />
                    <span className="text-sm text-foreground font-medium">{cert.name}</span>
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Verify <ExternalLink size={11} />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-8 mt-8 hover-lift"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{featuredPost.title}</h3>
            </div>
            <a
              href={featuredPost.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1 font-heading"
            >
              View Post <ExternalLink size={13} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{featuredPost.description}</p>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-heading">
              {featuredPost.tag}
            </span>
            {featuredPost.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
