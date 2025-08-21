# 🧠 Lumi API - Backend

Este é o backend do projeto **Chat IA Lumi**, desenvolvido em **Node.js + Express**.  
Ele é responsável por processar mensagens, lidar com upload de imagens e se comunicar com a **API do Google Gemini** para gerar respostas inteligentes.

## 🚀 Tecnologias do Backend

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</p>
<p>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
</p>
<p>
  <img src="https://img.shields.io/badge/CORS-006400?style=for-the-badge&logoColor=white"/>
</p>
<p>
  <img src="https://img.shields.io/badge/dotenv-8DD6F9?style=for-the-badge&logo=dotenv&logoColor=black"/>
</p>
<p>
  <img src="https://img.shields.io/badge/Multer-FF0000?style=for-the-badge&logoColor=white"/>
</p>
<p>
  <img src="https://img.shields.io/badge/Google%20Generative%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
</p>
<p>
  <img src="https://img.shields.io/badge/Railway-000000?style=for-the-badge&logo=railway&logoColor=white"/>
</p>

## 📂 Estrutura principal

lumi-api/
├── node_modules/ # Dependências
├── .env # Variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
├── server.js # Ponto de entrada da aplicação
└── README.md

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/IcaroMatux/lumi-api.git
cd lumi-api

# Instale as dependências
npm install

# Crie o arquivo .env e adicione sua chave da API Google
echo "GOOGLE_API_KEY=sua_chave_aqui" > .env

# Inicie o servidor
node server.js
```

## 🔑 Variáveis de ambiente (.env)

GOOGLE_API_KEY=sua_chave_da_api
PORT=5000

## 📡 Endpoints disponíveis

POST /chat → Envia uma mensagem de texto e retorna a resposta da IA.

POST /chat/image → Envia texto + imagem e retorna resposta da IA.

GET /ping → Verifica se o servidor está online.

## 🚀 Deploy

Este backend pode ser hospedado em serviços como Railway, Render ou Heroku.

Exemplo no Railway:

Crie um novo projeto e conecte o repositório.

Configure a variável **GOOGLE_API_KEY** em Settings > Variables.

Deploy será feito automaticamente.

Use a URL do **Railway** no frontend **(REACT_APP_API_URL).**

## 📄 Licença

MIT License.
Feito com 💚 por [Icaro].
