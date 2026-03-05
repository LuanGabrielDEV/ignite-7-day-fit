import { MessageCircle, Instagram, Mail } from "lucide-react";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", value: "(81) 99999-9999", href: "https://wa.me/5581999999999" },
  { icon: Instagram, label: "Instagram", value: "@alysonrafaelpersonal", href: "https://instagram.com/alysonrafaelpersonal" },
  { icon: Mail, label: "Email", value: "contato@alysonrafael.com", href: "mailto:contato@alysonrafael.com" },
];

const ContactSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-14">
        Entre em <span className="gold-text">contato</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-card border border-border rounded-xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors duration-300"
          >
            <c.icon className="w-8 h-8 text-primary" />
            <p className="font-display text-lg font-semibold">{c.label}</p>
            <p className="text-muted-foreground font-body text-sm">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
