"use client";
import React, { useEffect, useState } from 'react';
import { fetchUsers, incrementFollowers } from '@/services/api';

interface User {
  id: string;
  name: string;
}

const Suggestions = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [following, setFollowing] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchUsersData = async () => {
      const usersList = await fetchUsers();
      setUsers(usersList);
    };

    fetchUsersData();
  }, []);

  const handleFollow = async (userId: number) => {
    try {
      await incrementFollowers(userId);
      setFollowing((prevFollowing) => new Set(prevFollowing).add(userId));
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <h3 className="text-lg font-bold mb-4">Sugerencias</h3>
      {users.map((user) => (
        <div key={user.id} className="mb-2 flex justify-between items-center">
          <span>{user.name}</span>
          <button
            className={`px-2 py-1 rounded ${following.has(Number(user.id)) ? 'bg-gray-500' : 'bg-blue-500 text-white'}`}
            onClick={() => handleFollow(Number(user.id))}
            disabled={following.has(Number(user.id))}
          >
            {following.has(Number(user.id)) ? 'Siguiendo' : 'Seguir'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
