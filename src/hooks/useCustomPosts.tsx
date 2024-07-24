import { useState, useEffect } from 'react';
import { Post } from '@/interfaces/Post';
import { ref, uploadString, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/config/firebase';

interface UploadProgress {
  post: number;
  coverImage: number;
}

interface UsePostUploadResult {
  post: Post | null;
  setPost: React.Dispatch<React.SetStateAction<Post | null>>;
  coverImage: File | null;
  setCoverImage: React.Dispatch<React.SetStateAction<File | null>>;
  postUrl: string | null;
  coverImageUrl: string | null;
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  uploadProgress: UploadProgress;
  clearUploadData: () => void;
  uploadComplete: boolean;
}

export function usePostUpload(): UsePostUploadResult {
  const [post, setPost] = useState<Post | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [postUrl, setPostUrl] = useState<string | null>(null);
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({ post: 0, coverImage: 0 });

  useEffect(() => {
    const handleUpload = async () => {
      if (post && uploading) {
        try {
          // Upload post data
          const postRef = ref(storage, `posts/${post.id}.json`);
          await uploadString(postRef, JSON.stringify(post));
          setUploadProgress(prev => ({ ...prev, post: 100 }));
          const postDownloadUrl = await getDownloadURL(postRef);
          setPostUrl(postDownloadUrl);

          // Upload cover image if provided
          if (coverImage) {
            const imageRef = ref(storage, `post-images/${post.id}-cover`);
            const imageUploadTask = uploadBytesResumable(imageRef, coverImage);
            
            imageUploadTask.on('state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(prev => ({ ...prev, coverImage: progress }));
              }
            );

            await imageUploadTask;
            const coverImageDownloadUrl = await getDownloadURL(imageRef);
            setCoverImageUrl(coverImageDownloadUrl);
          }
        } catch (error) {
          console.error("Error uploading:", error);
        } finally {
          setUploading(false);
          setUploadComplete(true)
        }
      }
    };

    if (uploading) {
      handleUpload();
    }
  }, [post, coverImage, uploading, uploadComplete]);

  const clearUploadData = () => {
    setPost(null);
    setCoverImage(null);
    setPostUrl(null);
    setCoverImageUrl(null);
    setUploading(false);
    setUploadProgress({ post: 0, coverImage: 0 });
  };

  return {
    post,
    setPost,
    coverImage,
    setCoverImage,
    postUrl,
    coverImageUrl,
    uploading,
    setUploading,
    uploadProgress,
    clearUploadData,
    uploadComplete
  };
}