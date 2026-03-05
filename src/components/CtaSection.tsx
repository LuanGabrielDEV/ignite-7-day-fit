import { useNavigate } from "react-router-dom";
import { Flame } from "lucide-react";

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Comece hoje sua <span className="gold-text">transformação</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10">
          Não espere o momento perfeito. Comece hoje e veja a diferença em apenas 7 dias.
        </p>
        <button
          onClick={() => navigate("/pagamento")}
          className="gold-gradient text-primary-foreground font-display text-xl tracking-wider px-12 py-5 rounded-lg animate-pulse-gold hover:scale-105 transition-transform duration-300 inline-flex items-center gap-3 cursor-pointer"
        >
          <Flame className="w-6 h-6" />
          COMEÇAR AGORA
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
