import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors({
  origin: "https://lumi-ai-roan.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage: multer.memoryStorage() });

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// ✅ Endpoint único que lida com texto ou imagem + texto
app.post("/api/chat", upload.single("file"), async (req, res) => {
  const { file } = req;
  const rawPrompt = req.body.prompt;
  const prompt = rawPrompt && rawPrompt.trim() !== "" ? rawPrompt.trim() : "Analise esta imagem.";

  if (!file && !prompt) {
    return res.status(400).json({ error: "É necessário enviar texto ou imagem." });
  }

  try {
    // Se veio imagem, usa modelo com visão
    if (file) {
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

      const imagePart = {
        inlineData: {
          data: file.buffer.toString("base64"),
          mimeType: file.mimetype,
        },
      };

      const contents = [];
      if (prompt) contents.push({ text: prompt });
      contents.push(imagePart);

      const result = await model.generateContent(contents);
      const text = await result.response.text();
      return res.json({ response: text });

    } else {

      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const text = await result.response.text();
      return res.json({ response: text });
    }
  } catch (err) {
    console.error("Erro ao processar:", err);
    return res.status(500).json({ error: "Erro ao gerar resposta da IA." });
  }
});

app.listen(port, () => {
  console.log(`✅ Servidor rodando em http://localhost:${port}`);
});
