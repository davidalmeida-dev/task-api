import express from "express";
import taskRoutes  from "./routes/taskRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app  = express()
const PORT = 3000

app.use(express.json());
app.use("/tasks", taskRoutes);

// Middleware de tratamento de erros (sempre no final)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
