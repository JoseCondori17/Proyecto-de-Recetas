import axios from 'axios';
import { Post, Comment } from '@/types/types'; // Asegúrate de que la ruta sea correcta

const API_URL = 'https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Post/Cocina/Post';
const COMMENT_API_URL = 'https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Post/Cocina/Post/{Post_id}';
const POST_COMMENT_API_URL = 'https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina/comentario';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    console.log('Fetching posts from API...');
    const response = await axios.get(API_URL);
    console.log('API Response:', response);

    const data = response.data;
    console.log('API Response Data:', data);

    if (Array.isArray(data)) {
      console.log('API Response Data is an array:', data);

      // Fetch comments for each post
      const postsWithComments = await Promise.all(data.map(async (post) => {
        try {
          console.log(`Fetching comments for post ID: ${post.Post_id}`);
          const commentsResponse = await axios.get(COMMENT_API_URL.replace('{Post_id}', post.Post_id.toString()));
          console.log('Comments Response:', commentsResponse);
          const comments: Comment[] = commentsResponse.data;
          console.log('Parsed Comments:', comments);
          return { ...post, Comments: comments };
        } catch (commentsError) {
          console.error(`Error fetching comments for post ID: ${post.Post_id}`, commentsError);
          return { ...post, Comments: [] };
        }
      }));

      return postsWithComments;
    } else {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const postComment = async (comment: Omit<Comment, 'Comentario_id'>) => {
  try {
    console.log(`Posting comment for post ID: ${comment.Post_id}`, comment);
    const response = await axios.post(POST_COMMENT_API_URL, {
      Usuario_id: comment.Usuario_id,
      Post_id: comment.Post_id,
      Contenido: comment.Contenido,
      Likes: comment.Likes,
      Fecha: comment.Fecha,
      Hora: comment.Hora
    });
    console.log('Post Comment Response:', response);
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

export const fetchCommentsForPost = async (postId: number): Promise<Comment[]> => {
  try {
    console.log(`Fetching comments for post ID: ${postId}`);
    const response = await axios.get(COMMENT_API_URL.replace('{Post_id}', postId.toString()));
    console.log('Comments Response:', response);
    const comments: Comment[] = response.data;
    console.log('Parsed Comments:', comments);
    return comments;
  } catch (error) {
    console.error(`Error fetching comments for post ID: ${postId}`, error);
    throw error;
  }
};

export const postNewPost = async (post: Omit<Post, 'Post_id'>) => {
  try {
    console.log('Posting new post:', post);
    // Si hay imagen, se hace el encode en base64
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
    console.log('Post New Post Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error posting new post:', error);
    throw error;
  }
};
