import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import resources from "./routes/resources.js";
import welcome from "./routes/welcome.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'https://front-biblioteca-alpha.vercel.app/login',
}));
app.use(express.json());


 // Rotas
 app.use('/',welcome);
 app.use('/api/livros',resources);
 app.use('/api',authRoutes);
 
app.listen(PORT || 8000, () => {
    console.log(`Serviço rodando na porta ${PORT}`)
});

