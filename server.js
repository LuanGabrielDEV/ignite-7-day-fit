const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

// Configure o transporte do nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou outro serviço
  auth: {
    user: 'SEU_EMAIL@gmail.com', // seu email
    pass: 'SENHA_DO_EMAIL', // sua senha ou app password
  },
});

app.post('/api/send-email', async (req, res) => {
  const { nome, email, telefone, pagamento } = req.body;
  try {
    await transporter.sendMail({
      from: 'SEU_EMAIL@gmail.com',
      to: 'SEU_EMAIL@gmail.com', // pode ser o mesmo ou outro email de destino
      subject: 'Nova inscrição - 7 Dias',
      text: `Nova inscrição recebida:\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nOpção de pagamento: ${pagamento}`,
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Servidor backend rodando na porta 3001');
});
