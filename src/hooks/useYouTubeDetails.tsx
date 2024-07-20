import { useState, useEffect } from 'react';

interface YouTubeVideoDetails {
  title: string;
  description: string;
  thumbnailUrl: string;
  channelTitle: string;
}

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_DATA_API;

export function useYouTubeDetails(videoUrl:string|null, platform:string|null) {
  const [videoDetails, setVideoDetails] = useState<YouTubeVideoDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!videoUrl || platform !== "youtube") {
      setVideoDetails(null);
      return;
    }

    const fetchVideoDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const videoId = extractVideoId(videoUrl);
        if (!videoId || platform !== "youtube") {
          throw new Error('Invalid YouTube URL');
        }

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch video details');
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const snippet = data.items[0].snippet;
          setVideoDetails({
            title: snippet.title,
            description: snippet.description,
            thumbnailUrl: snippet.thumbnails.medium.url,
            channelTitle: snippet.channelTitle,
          });
        } else {
          throw new Error('Video not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoUrl, platform]);

  return { videoDetails, loading, error };
}

export function extractVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}