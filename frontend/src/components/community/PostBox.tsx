'use client';

import React, { useState, ChangeEvent } from 'react';
import { FaImage } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { postNewPost, NewPost } from '@/services/api'; 
import { Post } from '@/types/types';

const PostBox: React.FC<{ user: { Usuario_id: number; Username: string }, addPost: (post: Post) => void }> = ({ user, addPost }) => {
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!postContent) {
      setError("El contenido del post no puede estar vacío");
      return;
    }

    setLoading(true);
    setError(null);

    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toISOString().split('T')[0];
    const formattedTime = currentDateTime.toTimeString().split(' ')[0];

    const post: NewPost = {
      Usuario_id: user.Usuario_id,
      Username: user.Username,
      Contenido: postContent,
      Likes: 0,
      Fecha: formattedDate,
      Hora: formattedTime,
      Imagen: image || '',
    };

    console.log('Post data before sending:', post);

    try {
      const response = await postNewPost(post);
      console.log('Response from API:', response);
      addPost(response.post);
      setPostContent('');
      setImage(null);
    } catch (err) {
      setError("Error al registrar el post");
      console.error("Error al registrar el post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="mb-4">
        <textarea
          className="w-full border rounded p-2"
          placeholder="¿Qué estás pensando?"
          value={postContent}
          onChange={handleContentChange}
        />
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <label htmlFor="image-upload" className="cursor-pointer">
            <FaImage className="text-2xl mr-4" />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Publicando...' : 'Post'}
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PostBox;
