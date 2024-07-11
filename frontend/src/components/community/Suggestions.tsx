// components/Suggestions.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '@/services/api';
interface User {
  id: string;
  name: string;
}

const Suggestions = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const usersList = await fetchUsers();
      setUsers(usersList);
    };

    fetchUsersData();
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <h3 className="text-lg font-bold mb-4">Sugerencias</h3>
      {users.map((user) => (
        <div key={user.id} className="mb-2 flex justify-between items-center">
          <span>{user.name}</span>
          <button className="bg-blue-500 text-white px-2 py-1 rounded">Seguir</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;