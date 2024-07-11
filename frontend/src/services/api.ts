import axios from 'axios';
import { Post, Comment } from '@/types/types'; 

const API_URL = 'https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Post/Cocina/Post';
const COMMENT_API_URL = 'https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Post/Cocina/Post/{Post_id}';
const POST_COMMENT_API_URL = 'https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina/comentario';
const USER_API_URL = 'https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Usuario/Usuario';

interface User {
  id: string;
  name: string;
}

export interface NewPost {
  Usuario_id: number;
  Username: string;
  Contenido: string;
  Likes: number;
  Fecha: string;
  Hora: string;
  Imagen: string | File;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(API_URL);
    console.log('Fetched posts:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const postNewPost = async (post: NewPost) => {
  try {
    if (post.Imagen && typeof post.Imagen !== 'string') {
      const reader = new FileReader();
      const imageFile = post.Imagen;
      post.Imagen = await new Promise((resolve, reject) => {
        reader.onloadend = () => {
          if (reader.result) {
            resolve(reader.result.toString().split(',')[1]);
          } else {
            reject('Error converting image to base64');
          }
        };
        reader.readAsDataURL(imageFile);
      });
    }
    const response = await axios.post(API_URL, post);
    console.log('Post response from API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting new post:', error);
    throw error;
  }
};

export const fetchCommentsForPost = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await axios.get(COMMENT_API_URL.replace('{Post_id}', postId.toString()));
    console.log(`Fetched comments for post ${postId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ID: ${postId}`, error);
    throw error;
  }
};

export const postComment = async (comment: Omit<Comment, 'Comentario_id'>) => {
  try {
    const response = await axios.post(POST_COMMENT_API_URL, {
      Usuario_id: comment.Usuario_id,
      Post_id: comment.Post_id,
      Contenido: comment.Contenido,
      Likes: comment.Likes,
      Fecha: comment.Fecha,
      Hora: comment.Hora
    });
    console.log('Post comment response from API:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error posting comment:', error.response ? error.response.data : error.message);
      throw new Error(error.response ? error.response.data : error.message);
    } else {
      console.error('Unknown error posting comment:', error);
      throw new Error('An unknown error occurred while posting the comment.');
    }
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(USER_API_URL);
    const parsedBody = JSON.parse(response.data.body);
    const users = parsedBody.Items;
    console.log('Fetched users:', users);
    return users.map((user: any) => ({
      id: user.Usuario_id,
      name: user.Username
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
