"use client";
import { useState } from "react";
import LikesComments from "./LikesComments";
import NewComments from "./NewComments";
import CommentForm from "./CommentForm";
import { postComment } from '@/services/api';
import { Post, Comment } from '@/types/types';
import {calculateTimeAgo} from "@/lib/util/functionstls";

const Feed: React.FC<{ posts: Post[], className?: string }> = ({ posts, className = "" }) => {
  const [error, setError] = useState<string | null>(null);

  const addComment = async (postId: number, comment: string) => {
    const newComment: Omit<Comment, 'Comentario_id'> = {
      Usuario_id: 1, // Cambia esto para obtener el usuario actual
      Post_id: postId,
      Contenido: comment,
      Fecha: new Date().toISOString().split('T')[0],
      Hora: new Date().toLocaleTimeString(),
      Likes: 0,
    };

    try {
      await postComment(newComment);
      // Aquí deberías actualizar los comentarios del post en tu estado principal si es necesario
    } catch (error) {
      console.error('Error adding comment:', error);
      setError('Error adding comment');
    }
  };

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  return (
    <div className={`bg-white rounded-lg p-4 mt-4 shadow-md ${className} flex flex-col space-y-4`}>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => {
          const timeAgo = calculateTimeAgo(post.Fecha, post.Hora);
          return (
            <div key={post.Post_id} className="flex flex-col mb-4 space-y-4">
              <div>
                <h2 className="text-xl font-bold">{post.Username || `Usuario ${post.Usuario_id}`}</h2>
                <p>{post.Contenido}</p>
                <p className="text-gray-500">{`Publicado ${timeAgo}`}</p>
              </div>
              <div className={`flex ${post.Imagen ? 'space-x-4' : ''}`}>
                {post.Imagen && <img src={`data:image/jpeg;base64,${post.Imagen}`} alt={`Imagen del post ${post.Post_id}`} className="w-1/2 h-auto" />}
                <div className={`${post.Imagen ? 'w-1/2' : 'w-full'} flex flex-col items-end space-y-2`}>
                  <LikesComments comments={post.Comments || []} likes={post.Likes} />
                  <NewComments comments={post.Comments || []} />
                </div>
              </div>
              <div className="mt-auto">
                {post.Post_id !== undefined && (
                  <CommentForm onAddComment={(comment) => addComment(post.Post_id as number, comment)} />
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
};

export default Feed;
