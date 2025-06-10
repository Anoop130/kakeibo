import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import entryRoutes from './routes/entryRoutes'; // ✅ correct import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/entries', entryRoutes);

app.get('/', (_req, res) => {
  res.send('Kakeibo API is running');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
