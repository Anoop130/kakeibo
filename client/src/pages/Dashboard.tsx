import React, { useState, useEffect } from 'react';
import { getEntries, createEntry } from '../services/api';

const userId = 1; // Temp hardcoded

export default function Dashboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries(userId).then(setEntries);
  }, []);

  const onAdd = () => {
    createEntry({
      amount: 5.0,
      type: 'EXPENSE',
      category: 'NEEDS',
      note: 'Coffee',
      userId
    }).then(newEntry => {
      setEntries(prev => [...prev, newEntry]);
    });
  };

  return (
    <div>
      <h1>Entries</h1>
      <button onClick={onAdd}>Add Test Entry</button>
      <ul>
        {entries.map(e => (
          <li key={e.id}>{e.amount} — {e.category} — {e.note}</li>
        ))}
      </ul>
    </div>
  );
}
