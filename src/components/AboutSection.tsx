import { Dumbbell, TrendingUp, Clock, UserCheck } from "lucide-react";

const items = [
  { icon: Dumbbell, text: "Treinos guiados" },
  { icon: TrendingUp, text: "Metodologia progressiva" },
  { icon: Clock, text: "Estratégias simples para encaixar na rotina" },
  { icon: UserCheck, text: "Orientação profissional" },
];

const AboutSection = () => (
  <section className="py-20 md:py-28 geometric-lines">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
        Como funciona o <span className="gold-text">desafio de 7 dias</span>
      </h2>
      <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
        Durante 7 dias você terá acesso a um programa estruturado de treinos para ativar seu corpo, 
        melhorar sua disposição e iniciar um processo real de emagrecimento.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors duration-300"
          >
            <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="font-body font-medium text-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
