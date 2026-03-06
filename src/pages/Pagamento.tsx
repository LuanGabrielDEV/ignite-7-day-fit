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

  const numeroWhatsapp = "5581999870434";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nome ||
      !formData.email ||
      !formData.telefone ||
      !formData.cpf
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const mensagem = `
Olá! Quero participar do programa 7 Dias.

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
CPF: ${formData.cpf}
Forma de pagamento: ${
      paymentMethod === "cartao" ? "Cartão de crédito" : "Pix"
    }
`;

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagem
    )}`;

    try {
      await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          paymentMethod,
        }),
      });
    } catch (error) {
      console.log("Erro ao enviar email:", error);
    }

    toast.success("Redirecionando para o WhatsApp...");

    // Redireciona para WhatsApp
    window.location.href = url;
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

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-6 max-w-lg w-full"
          >
            <h2 className="font-display text-xl font-semibold mb-2">
              Dados pessoais
            </h2>

            {[
              {
                name: "nome",
                label: "Nome completo",
                type: "text",
                placeholder: "Seu nome completo",
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "seu@email.com",
              },
              {
                name: "telefone",
                label: "Telefone",
                type: "tel",
                placeholder: "(00) 00000-0000",
              },
              {
                name: "cpf",
                label: "CPF",
                type: "text",
                placeholder: "000.000.000-00",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  {field.label}
                </label>

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
              <label className="block font-body text-sm text-muted-foreground mb-3">
                Forma de pagamento
              </label>

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
              FINALIZAR INSCRIÇÃO
            </button>

            <p className="text-muted-foreground/60 text-xs font-body text-center">
              Seus dados serão enviados para nosso atendimento via WhatsApp.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Pagamento;