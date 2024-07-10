"use client";
import React, { useState, ChangeEvent } from 'react';
import { FaImage, FaVideo, FaLink } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const PostBox: React.FC = () => {
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica para enviar el contenido del post y la imagen
    console.log('Post content:', postContent);
    console.log('Image:', image);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center">
        <label htmlFor="image-upload">
          <FaImage className="cursor-pointer text-2xl mr-4" />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <textarea
          className="flex-1 border rounded p-2"
          placeholder="¿Qué estás pensando?"
          value={postContent}
          onChange={handleContentChange}
        />
        <Button onClick={handleSubmit} className="ml-4">Post</Button>
      </div>
    </div>
  );
};

export default PostBox;
