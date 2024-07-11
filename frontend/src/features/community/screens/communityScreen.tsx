'use client';

import React, { useEffect, useState } from 'react';
import Feed from "@/components/community/Feed";
import Top from "@/components/community/Top";
import Suggestions from "@/components/community/Suggestions";
import PostBox from "@/components/community/PostBox";
import { Post } from '@/types/types';
import { fetchPosts } from '@/services/api';

export function CommunityScreen() {
  const [user, setUser] = useState<{ Usuario_id: number; Username: string }>({ Usuario_id: 0, Username: 'Guest' });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userString = localStorage.getItem('currentUser');
      if (userString) {
        setUser(JSON.parse(userString));
      }
    }

    const getPosts = async () => {
      try {
        console.log('Fetching posts...');
        const fetchedPosts = await fetchPosts();
        console.log('Fetched Posts:', fetchedPosts);
        if (Array.isArray(fetchedPosts)) {
          setPosts(fetchedPosts);
        } else {
          console.error('Fetched posts is not an array:', fetchedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col mx-4 my-4 overflow-auto mr-64">
        <Top />
        <PostBox user={user} addPost={addPost} />
        <Feed posts={posts} />
        <div className="flex flex-col space-y-4">
          {/* Otros componentes si los hay */}
        </div>
      </div>
      <div className="w-64 bg-white flex-shrink-0 fixed top-0 right-0 h-screen flex flex-col justify-between px-4 py-4 overflow-y-auto right-sidebar">
        <Suggestions />
      </div>
    </div>
  );
}

export default CommunityScreen;
