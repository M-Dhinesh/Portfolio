import { motion } from "framer-motion";
import { Trophy, ExternalLink, Award, Code, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      { label: "Badges Earned", value: "4" },
    ],
    badges: [
      { name: "Problem Solving", stars: 3 },
      { name: "Java", stars: 3 },
      { name: "Python", stars: 5 },
      { name: "SQL", stars: 5 },
    ],
  },
];

const certifications = [
  {
    name: "Data Engineer Professional",
    fullName: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    level: "Professional",
    url: "https://lnkd.in/gSSdrDzR",
    featured: true,
  },
  {
    name: "Python (Basic)",
    fullName: "Python (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/a14885c1e6a5",
  },
  {
    name: "Problem Solving (Basic)",
    fullName: "Problem Solving (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/7bf1ad7e8c3c",
  },
  {
    name: "SQL (Basic)",
    fullName: "SQL (Basic)",
    issuer: "HackerRank",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/611a84a5a074",
  },
];

const issuerStyles: Record<string, { accent: string; bg: string; border: string }> = {
  Databricks: {
    accent: "text-[#f39a7d]",
    bg: "bg-[#f39a7d]/10",
    border: "border-[#f39a7d]/25",
  },
  HackerRank: {
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/25",
  },
};

const AchievementsSection = () => {
  const featuredCert = certifications.find((c) => c.featured)!;
  const otherCerts = certifications.filter((c) => !c.featured);

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
          <h2 className="section-heading mt-2 mb-8">Coding Profiles & Certifications</h2>
        </motion.div>

        <Tabs defaultValue="profiles" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 flex justify-center"
          >
            <TabsList className="h-auto gap-1 rounded-xl border border-border bg-card/60 p-1.5 backdrop-blur-sm">
              <TabsTrigger
                value="profiles"
                className="rounded-lg px-5 py-2.5 font-heading text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                <Code size={15} className="mr-2" />
                Coding Profiles
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="rounded-lg px-5 py-2.5 font-heading text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                <ShieldCheck size={15} className="mr-2" />
                Certifications
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="profiles" className="mt-0 focus-visible:outline-none">
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

                <div className="grid grid-cols-4 gap-3 mb-6">
                  {platforms[0].stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xl font-heading font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 mb-5">
                  <Trophy size={15} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{platforms[0].badge}</span>
                </div>

                <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">Languages Used</h4>
                <div className="flex flex-wrap gap-2 mb-5">
                  {platforms[0].languages.map((lang) => (
                    <span key={lang} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                      {lang}
                    </span>
                  ))}
                </div>

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

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {platforms[1].stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-3">Badges</h4>
                <div className="flex flex-wrap gap-2">
                  {platforms[1].badges!.map((badge) => (
                    <div key={badge.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
                      <span className="text-sm text-foreground font-medium">{badge.name}</span>
                      <span className="text-primary text-xs">{"★".repeat(badge.stars)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-0 focus-visible:outline-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { label: "Total Certifications", value: certifications.length },
                { label: "Professional", value: "1" },
                { label: "Platforms", value: "2" },
                { label: "Verified", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card px-4 py-5 text-center">
                  <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Featured certification */}
            <motion.a
              href={featuredCert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group mb-8 block glass-card overflow-hidden border-l-4 border-l-[#f39a7d] hover-lift"
            >
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
                <div className="flex shrink-0 items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-[#f39a7d]/20 blur-xl transition-opacity group-hover:opacity-100 opacity-60" />
                    <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-[#f39a7d]/30 bg-gradient-to-br from-[#f39a7d]/15 to-transparent">
                      <ShieldCheck size={36} className="text-[#f39a7d]" strokeWidth={1.5} />
                      <span className="mt-1.5 text-[10px] font-heading font-bold uppercase tracking-widest text-[#f39a7d]">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[#f39a7d]/25 bg-[#f39a7d]/10 px-3 py-1 text-xs font-heading font-medium text-[#f39a7d]">
                      {featuredCert.issuer}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-heading font-medium text-muted-foreground">
                      {featuredCert.level}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    {featuredCert.fullName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Production-grade data pipelines, lakehouse architecture, and distributed data engineering on the
                    Databricks platform.
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-heading font-medium text-primary-foreground transition-colors group-hover:bg-primary/90 sm:self-center">
                  Verify <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>

            {/* Other certifications */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="mb-4 text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                HackerRank Certifications
              </h4>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherCerts.map((cert, i) => {
                  const style = issuerStyles[cert.issuer];
                  return (
                    <motion.a
                      key={cert.fullName}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`group glass-card flex flex-col gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg ${style.border}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.bg}`}>
                          <Award size={20} className={style.accent} />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-heading text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          Verify <ExternalLink size={11} />
                        </span>
                      </div>

                      <div>
                        <p className="font-heading text-sm font-semibold text-foreground">{cert.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {cert.issuer} · {cert.level}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AchievementsSection;
