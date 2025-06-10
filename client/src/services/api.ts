import axios from 'axios';

// Use your env variable (Vite prefix is VITE_)
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Entry {
  id: number;
  amount: number;
  type: string;
  category: string;
  note?: string;
  userId: number;
  createdAt: string;
}

export function getEntries(userId: number): Promise<Entry[]> {
  return axios.get<Entry[]>(`${API}/api/entries`, { params: { userId } })
    .then(res => res.data);
}

export function createEntry(data: {
  amount: number;
  type: 'INCOME' | 'EXPENSE' | 'SAVINGS';
  category: 'NEEDS' | 'WANTS' | 'CULTURE' | 'UNEXPECTED';
  note?: string;
  userId: number;
}): Promise<Entry> {
  return axios.post<Entry>(`${API}/api/entries`, data)
    .then(res => res.data);
}
