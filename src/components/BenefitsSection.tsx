import { Zap, Home, HeartPulse, Users, Activity } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Treinos rápidos e eficientes", desc: "Exercícios otimizados para máximo resultado em pouco tempo." },
  { icon: Home, title: "Em casa ou academia", desc: "Flexibilidade total para treinar onde preferir." },
  { icon: Users, title: "Acompanhamento profissional", desc: "Suporte de um personal trainer certificado." },
  { icon: HeartPulse, title: "Ideal para iniciantes e intermediários", desc: "Treinos adaptados ao seu nível atual." },
  { icon: Activity, title: "Melhora da disposição", desc: "Sinta mais energia e condicionamento físico desde o primeiro dia." },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
        Benefícios do <span className="gold-text">programa</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="group bg-background border border-border rounded-xl p-8 hover:border-primary/50 hover:gold-glow transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-5">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
