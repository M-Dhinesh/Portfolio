import { motion } from "framer-motion";
import { Trophy, ExternalLink, Award, Code } from "lucide-react";

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
      { name: "Databricks Certified Data Engineer Professional", url: "https://lnkd.in/p/grSTZrmy" },
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
          className="mt-8"
        >
          <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-3">Certification Badge</h4>

          <div className="mx-auto w-full max-w-[540px] rounded-[30px] border border-white/10 bg-[#11181d] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.35)]">
            <div className="overflow-hidden rounded-[26px] bg-[#181c20] p-3 sm:p-4">
              <div className="flex items-center justify-center rounded-[18px] bg-[#1d1f22] px-5 py-3 text-center text-2xl sm:text-4xl font-black tracking-tight text-white shadow-inner shadow-black/30">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-[0.72rem] font-bold text-white/90">
                  ◫
                </div>
                <span className="tracking-[-0.06em]">databricks</span>
              </div>

              <div className="mt-3 rounded-[18px] bg-[#f39a7d] px-4 py-4 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
                <div className="text-2xl sm:text-4xl font-black uppercase tracking-[0.15em] text-[#15161a]">Certified</div>
                <div className="mt-3 flex justify-center gap-2 text-lg sm:text-2xl text-[#f7e8ac]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <div className="mt-5 text-center text-[2rem] sm:text-[3.2rem] font-black leading-[0.98] tracking-[-0.06em] text-white">
                Data Engineer
                <span className="block">Professional</span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[20px] border border-white/5 bg-[#173746] px-3 py-7 shadow-inner shadow-black/20">
                <div className="absolute inset-x-0 bottom-0 h-14 bg-[#36a9c7] opacity-95" />
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[16px] border-[#f39a7d] bg-transparent shadow-[0_0_0_10px_rgba(243,154,125,0.18)]" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-[#1f4d5d] opacity-90" />
                <div className="absolute inset-x-0 bottom-0 h-10 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 12px 10px, rgba(17,24,39,0.7) 0 10px, transparent 11px)' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
