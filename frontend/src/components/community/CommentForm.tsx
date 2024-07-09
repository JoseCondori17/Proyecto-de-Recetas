"use client";

import { useState } from "react";

type CommentFormProps = {
  onAddComment: (comment: string) => Promise<void>; // Asegurarnos de que onAddComment sea una función asíncrona
};

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      await onAddComment(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border rounded-lg"
        placeholder="Escribe un comentario..."
        style={{ height: '3rem' }} // Ajustar la altura del textarea
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg mx-4"
        style={{ height: '3rem', alignSelf: 'center' }} // Ajustar la altura del botón y alinearlo
      >
        Comentar
      </button>
    </form>
  );
};

export default CommentForm;
