import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos Silva", text: "Em apenas 7 dias já senti mais energia e disposição." },
  { name: "Juliana Santos", text: "Treinos simples e eficientes que cabem na rotina." },
  { name: "Ricardo Oliveira", text: "Ótimo programa para quem quer começar a treinar." },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 dot-pattern">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
        O que dizem nossos <span className="gold-text">alunos</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground font-body mb-6 italic leading-relaxed">"{t.text}"</p>
            <p className="font-display text-primary font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
