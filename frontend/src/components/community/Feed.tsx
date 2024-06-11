"use client";

import { useState } from "react";
import LikesComments from "./LikesComments";
import NewComments from "./NewComments";
import CommentForm from "./CommentForm";

type Comment = {
  id: number;
  user: string;
  text: string;
};

const Feed: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: 'Natali', text: 'Great post!' },
    { id: 2, user: 'Jhony', text: 'I agree!' }
  ]);

  const addComment = (comment: string) => {
    const newComment = {
      id: comments.length + 1,
      user: 'User', // Aquí puedes usar el nombre del usuario actual
      text: comment,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className={`bg-white rounded-lg p-4 mt-4 shadow-md ${className} flex`}>
      <div className="flex-1 pr-10 flex flex-col"> {/* Columna izquierda con contenido y formulario */}
        <div>
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-bold">Swaa Lee</h2>
            <p>What a delicious dish!!!!!</p>
          </div>
        </div>
        <div className="mt-auto"> {/* Asegura que el CommentForm esté en la parte inferior */}
          <CommentForm onAddComment={addComment} />
        </div>
      </div>
      <div className="w-[300px] ml-auto flex flex-col items-end"> {/* Columna derecha con LikesComments y NewComments */}
        <LikesComments comments={comments} likes={10} /> {/* Pasar la lista de comentarios y el número de "likes" */}
        <NewComments comments={comments} />
      </div>
    </div>
  );
};

export default Feed;
