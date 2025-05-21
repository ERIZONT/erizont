// server.js
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Permite comunicação com seu site

// Endpoint seguro para buscar a lista M3U
app.get('/api/lista-m3u', async (req, res) => {
  try {
    // Suas credenciais reais aqui (NUNCA as compartilhe!)
    const USERNAME = '978210346';
    const PASSWORD = '990184731';

    // Busca os dados do M3U remotamente
    const resposta = await fetch(
      `https://imperiotv.fun/get.php?username=${USERNAME}&password=${PASSWORD}&type=m3u_plus&output=mpegts`
    );
    
    const dados = await resposta.text();
    res.send(dados);
    
  } catch (erro) {
    res.status(500).send('Erro ao carregar a lista');
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
