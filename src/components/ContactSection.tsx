import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dhinesh88825@gmail.com",
    href: "mailto:dhinesh88825@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93457 74767",
    href: "tel:+919345774767",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, India",
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dhineshpa",
    href: "https://www.linkedin.com/in/dhineshpa",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-heading mt-2 mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Interested in working together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <info.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{info.label}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
