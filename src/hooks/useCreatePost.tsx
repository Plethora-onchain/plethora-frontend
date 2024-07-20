import { useState, useEffect } from "react";
import { Post } from "@/interfaces/Post";

export function useLocalStorageBlog() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize local storage if it doesn't exist
    if (!localStorage.getItem('posts')) {
      localStorage.setItem('posts', JSON.stringify([]));
    }
    setInitialized(true);
  }, []);

  const addPost = async (postData: Omit<Post, 'id' | 'createdAt'>): Promise<Post> => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const newPost: Post = {
      ...postData,
      id: Date.now().toString(),
      createdAt: Date.now()
    };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    return newPost;
  };

  const getPosts = async (): Promise<Post[]> => {
    return JSON.parse(localStorage.getItem('posts') || '[]');
  };

  const updatePost = async (id: string, postData: Partial<Post>): Promise<Post | null> => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const index = posts.findIndex((post: Post) => post.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...postData };
      localStorage.setItem('posts', JSON.stringify(posts));
      return posts[index];
    }
    return null;
  };

  const deletePost = async (id: string): Promise<boolean> => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const filteredPosts = posts.filter((post: Post) => post.id !== id);
    if (filteredPosts.length !== posts.length) {
      localStorage.setItem('posts', JSON.stringify(filteredPosts));
      return true;
    }
    return false;
  };

  return {
    initialized,
    addPost,
    getPosts,
    updatePost,
    deletePost,
  };
}