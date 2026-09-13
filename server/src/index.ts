import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API успешно работает на TypeScript!' });
});

app.listen(PORT, () => {
  console.log(`[server]: Сервер запущен на http://localhost:${PORT}`);
});