import axios from 'axios';

const API_URL = 'https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina/post';

export const fetchPosts = async () => {
  try {
    console.log('Fetching posts from API...');
    const response = await axios.get(API_URL);
    console.log('API Response:', response);

    const data = response.data;
    // Parse the body if it's a string
    const posts = typeof data.body === 'string' ? JSON.parse(data.body) : data.body;
    console.log('Parsed Body:', posts);

    if (Array.isArray(posts)) {
      console.log('API Response Data:', posts);
      return posts;
    } else {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
