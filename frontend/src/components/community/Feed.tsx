"use client";

import { useEffect, useState } from "react";
import LikesComments from "./LikesComments";
import NewComments from "./NewComments";
import CommentForm from "./CommentForm";
import { fetchPosts } from '@/services/api';

type Comment = {
  id: number;
  user: string;
  text: string;
};

type Post = {
  Post_id: number;
  Imagen: string;
  Fecha: string;
  Usuario_id: number;
  Hora: string;
  Likes: number;
  Contenido: string;
};

const Feed: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [comments, setComments] = useState<Comment[]>([]);
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

  const addComment = (comment: string) => {
    const newComment = {
      id: comments.length + 1,
      user: 'User', // Aquí puedes usar el nombre del usuario actual
      text: comment,
    };
    setComments([...comments, newComment]);
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
        posts.map((post) => (
          <div key={post.Post_id} className="flex-1 pr-10 flex flex-col mb-4"> {/* Columna izquierda con contenido y formulario */}
            <div>
              <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-bold">{`Usuario ${post.Usuario_id}`}</h2>
                <p>{post.Contenido}</p>
              </div>
            </div>
            <div className="mt-auto"> {/* Asegura que el CommentForm esté en la parte inferior */}
              <CommentForm onAddComment={addComment} />
            </div>
            <div className="w-[300px] ml-auto flex flex-col items-end"> {/* Columna derecha con LikesComments y NewComments */}
              <LikesComments comments={comments} likes={post.Likes} /> {/* Pasar la lista de comentarios y el número de "likes" */}
              <NewComments comments={comments} />
            </div>
          </div>
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
};

export default Feed;
