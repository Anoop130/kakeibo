import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/entries — list all entries
router.get('/', async (_req: Request, res: Response) => {
  try {
    const entries = await prisma.entry.findMany();
    return res.json(entries);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to load entries' });
  }
});

// POST /api/entries — create a new entry
router.post('/', async (req: Request, res: Response) => {
  const { amount, type, category, note, userId } = req.body;

  if (!amount || !type || !category || !userId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const entry = await prisma.entry.create({
      data: { amount, type, category, note, userId },
    });
    return res.status(201).json(entry);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create entry' });
  }
});

export default router;
