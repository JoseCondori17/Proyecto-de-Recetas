"use client";
import { useState, useEffect } from "react";
import { FaThumbsUp } from 'react-icons/fa';
import LikesComments from "./LikesComments";
import NewComments from "./NewComments";
import CommentForm from "./CommentForm";
import { fetchCommentsForPost, postComment, incrementLikes } from '@/services/api';
import { Post, Comment } from '@/types/types';
import { calculateTimeAgo } from "@/lib/util/functionstls";

interface FeedProps {
  posts: Post[];
  className?: string;
}

const Feed: React.FC<FeedProps> = ({ posts, className = "" }) => {
  const [error, setError] = useState<string | null>(null);
  const [storedUser, setStoredUser] = useState<{ Usuario_id: number, Username: string } | null>(null);
  const [comments, setComments] = useState<{ [key: number]: Comment[] }>({});
  const [updatedPosts, setUpdatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setStoredUser(JSON.parse(user));
      console.log('Usuario recuperado de localStorage:', JSON.parse(user));
    }
    setUpdatedPosts(posts); // Inicializar updatedPosts con los posts recibidos como props
  }, [posts]);

  const fetchComments = async (postId: number) => {
    try {
      const postComments = await fetchCommentsForPost(postId);
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: postComments,
      }));
    } catch (error) {
      console.error(`Error fetching comments for post ID: ${postId}`, error);
      setError('Error fetching comments');
    }
  };

  const addComment = async (postId: number, comment: string) => {
    if (!storedUser) {
      setError('Usuario no encontrado en localStorage');
      return;
    }

    const newComment: Comment = {
      Comentario_id: Date.now(), // Generar un ID temporal para el comentario
      Usuario_id: storedUser.Usuario_id,
      Post_id: postId,
      Contenido: comment,
      Fecha: new Date().toISOString().split('T')[0],
      Hora: new Date().toLocaleTimeString(),
      Likes: 0,
    };

    try {
      await postComment(newComment, storedUser.Username);
      // Actualiza los comentarios inmediatamente después de agregar uno nuevo
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), newComment]
      }));
    } catch (error) {
      console.error('Error adding comment:', error);
      setError('Error adding comment');
    }
  };

  const handleLike = async (postId: number) => {
    if (!storedUser) {
      setError('Usuario no encontrado en localStorage');
      return;
    }

    try {
      const updatedPost = await incrementLikes(postId, storedUser.Usuario_id);
      setUpdatedPosts((prevPosts) => 
        prevPosts.map((post) =>
          post.Post_id === postId ? { ...post, Likes: updatedPost.nueva_cantidad } : post
        )
      );
    } catch (error) {
      console.error('Error incrementing likes:', error);
      setError('Error incrementing likes');
    }
  };

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  return (
    <div className={`bg-white rounded-lg p-4 mt-4 shadow-md ${className} flex flex-col space-y-4`}>
      {updatedPosts.map((post) => {
        if (!post || !post.Fecha || !post.Hora || !post.Username) {
          console.error("Post con datos incompletos:", post);
          return null;
        }

        const timeAgo = calculateTimeAgo(post.Fecha, post.Hora);
        return (
          <div key={post.Post_id} className="flex flex-col mb-4 space-y-4">
            <div>
              <h2 className="text-xl font-bold">{post.Username || `Usuario ${post.Usuario_id}`}</h2>
              <p>{post.Contenido}</p>
              <p className="text-gray-500">{`Publicado ${timeAgo}`}</p>
            </div>
            {post.Imagen && (
              <img src={post.Imagen} alt={`Imagen del post ${post.Post_id}`} className="w-full h-auto" />
            )}
            <div className="flex items-center">
              <button onClick={() => handleLike(post.Post_id)} className="text-blue-500 mr-2">
                <FaThumbsUp />
              </button>
              <span>{post.Likes}</span>
            </div>
            <div>
              <LikesComments comments={comments[post.Post_id] || []} likes={post.Likes} />
              <NewComments comments={comments[post.Post_id] || []} />
            </div>
            <div className="mt-auto">
              {post.Post_id !== undefined ? (
                <>
                  <CommentForm onAddComment={(comment) => addComment(post.Post_id, comment)} />
                  <button onClick={() => fetchComments(post.Post_id)} className="text-blue-500 mt-2">Cargar Comentarios</button>
                </>
              ) : (
                <p className="text-red-500">Error: Post ID is undefined</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
