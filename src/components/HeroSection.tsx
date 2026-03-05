import trainerImg from "@/assets/trainer.png";
import { useNavigate } from "react-router-dom";
import { Flame, ChevronRight } from "lucide-react";

const benefits = [
  "7 dias para ativar seu corpo",
  "Mudança no corpo começando pela mente",
  "Treinos seguros e guiados",
  "Treinos que cabem na sua rotina",
  "Progressão de treino ao longo da semana",
  "Treinos adaptados para diferentes níveis e idades",
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center dot-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Trainer Image */}
          <div className="relative flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary gold-glow">
              <img
                src={trainerImg}
                alt="Alyson Rafael - Personal Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border px-4 py-1 rounded-full">
              <span className="text-xs text-muted-foreground font-body">CREF 020980-G/PE</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-primary font-display text-lg tracking-widest mb-2">ALYSON RAFAEL</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
              PERSONAL
              <br />
              <span className="gold-text">TRAINER</span>
            </h1>
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-8">
              <Flame className="w-5 h-5 text-primary" />
              <p className="font-display text-xl md:text-2xl text-foreground/90 tracking-wide">
                Desafio de Emagrecimento – 7 Dias
              </p>
            </div>

            <ul className="space-y-3 mb-10 max-w-lg mx-auto lg:mx-0">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary-foreground font-body">
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/pagamento")}
              className="gold-gradient text-primary-foreground font-display text-lg md:text-xl tracking-wider px-10 py-4 rounded-lg animate-pulse-gold hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              QUERO PARTICIPAR DO DESAFIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
