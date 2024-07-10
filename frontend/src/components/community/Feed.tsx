"use client";
import { useEffect, useState } from "react";
import LikesComments from "./LikesComments";
import NewComments from "./NewComments";
import CommentForm from "./CommentForm";
import { fetchPosts, postComment } from '@/services/api';
import { Post, Comment } from '@/types/types'; // Asegúrate de que la ruta sea correcta

// Función para calcular la diferencia en días o en horas
const calculateTimeAgo = (dateString: string, timeString: string): string => {
  const postDateTime = new Date(`${dateString}T${timeString}`);
  const currentTime = new Date();
  const diffInMs = currentTime.getTime() - postDateTime.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convertir milisegundos a horas

  if (diffInHours >= 24) {
    const diffInDays = Math.floor(diffInHours / 24);
    return `hace ${diffInDays} ${diffInDays > 1 ? 'días' : 'día'}`;
  } else {
    return `hace ${diffInHours} ${diffInHours > 1 ? 'horas' : 'hora'}`;
  }
};

const Feed: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        console.log('Fetching posts...');
        const fetchedPosts = await fetchPosts();
        console.log('Fetched Posts:', fetchedPosts);
        if (Array.isArray(fetchedPosts)) {
          setPosts(fetchedPosts);
        } else {
          console.error('Fetched posts is not an array:', fetchedPosts);
          setError('Fetched posts is not an array');
        }
      } catch (error) {
        setError('Error fetching posts');
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const addComment = async (postId: number, comment: string) => {
    const newComment: Omit<Comment, 'Comentario_id'> = {
      Usuario_id: 1, // Cambia esto para obtener el usuario actual
      Post_id: postId,
      Contenido: comment,
      Fecha: new Date().toISOString().split('T')[0], // Fecha actual
      Hora: new Date().toLocaleTimeString(), // Hora actual
      Likes: 0, // Inicializar con 0 likes
    };

    try {
      await postComment(newComment);
      const updatedPosts = posts.map(post =>
        post.Post_id === postId ? { ...post, Comments: [...(post.Comments || []), { ...newComment, Comentario_id: Math.random() }] } : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              {/* Primera fila: Nombre de usuario y contenido */}
              <div>
                <h2 className="text-xl font-bold">{post.Username || `Usuario ${post.Usuario_id}`}</h2>
                <p>{post.Contenido}</p>
                <p className="text-gray-500">{`Publicado ${timeAgo}`}</p>
              </div>
              {/* Segunda fila: Imagen y columna para likes, comentarios y lista de comentarios */}
              <div className={`flex ${post.Imagen ? 'space-x-4' : ''}`}>
                {post.Imagen && <img src={post.Imagen} alt={`Imagen del post ${post.Post_id}`} className="w-1/2 h-auto" />}
                <div className={`${post.Imagen ? 'w-1/2' : 'w-full'} flex flex-col items-end space-y-2`}>
                  <LikesComments comments={post.Comments || []} likes={post.Likes} />
                  <NewComments comments={post.Comments || []} />
                </div>
              </div>
              {/* Tercera fila: Cajón de comentarios */}
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
