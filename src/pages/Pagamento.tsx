import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, QrCode, Flame } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";

const Pagamento = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"cartao" | "pix">("cartao");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.telefone || !formData.cpf) {
      toast.error("Preencha todos os campos!");
      return;
    }
    toast.success("Pagamento simulado com sucesso! Em breve você receberá as instruções por email.");
  };

  return (
    <main className="min-h-screen dot-pattern">
      <div className="container mx-auto px-4 py-10 md:py-20 max-w-4xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-body cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <h1 className="font-display text-3xl md:text-5xl font-bold mb-10 text-center">
          Finalizar inscrição no{" "}
          <span className="gold-text">Desafio de 7 Dias</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Product Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 sticky top-10">
              <h2 className="font-display text-xl font-semibold mb-6 gold-text">Resumo do pedido</h2>
              <div className="space-y-4 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Produto</span>
                  <span className="text-foreground font-medium">Desafio de Emagrecimento – 7 Dias</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Instrutor</span>
                  <span className="text-foreground">Alyson Rafael</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categoria</span>
                  <span className="text-foreground">Mentoria Fitness</span>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-display text-3xl font-bold gold-text">R$ 97,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
              <h2 className="font-display text-xl font-semibold mb-2">Dados pessoais</h2>

              {[
                { name: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome completo" },
                { name: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
                { name: "telefone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
                { name: "cpf", label: "CPF", type: "text", placeholder: "000.000.000-00" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-body text-sm text-muted-foreground mb-2">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block font-body text-sm text-muted-foreground mb-3">Forma de pagamento</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cartao")}
                    className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 font-body text-sm transition-all cursor-pointer ${
                      paymentMethod === "cartao"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    Cartão de crédito
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 font-body text-sm transition-all cursor-pointer ${
                      paymentMethod === "pix"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    Pix
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-primary-foreground font-display text-lg tracking-wider py-4 rounded-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Flame className="w-5 h-5" />
                FINALIZAR PAGAMENTO
              </button>

              <p className="text-muted-foreground/60 text-xs font-body text-center">
                Pagamento processado de forma segura. Estrutura preparada para integração com gateway de pagamento.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Pagamento;
