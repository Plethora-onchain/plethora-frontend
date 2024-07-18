// useHashnodeArticleDetails.ts
import { useState, useEffect } from 'react';

interface HashnodeArticleDetails {
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
  author: {
    name: string;
    username: string;
  };
}

export function useHashnodeArticleDetails(articleUrl: string | null) {
  const [articleDetails, setArticleDetails] = useState<HashnodeArticleDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleUrl) {
      setArticleDetails(null);
      return;
    }

    const fetchArticleDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const { slug, host } = extractSlugAndHost(articleUrl);
        if (!slug || !host) {
          throw new Error('Invalid Hashnode article URL');
        }

        const query = `
          query GetArticle($slug: String!, $host: String!) {
            post(slug: $slug, hostname: $host) {
              title
              brief
              coverImage
              dateAdded
              author {
                name
                username
              }
            }
          }
        `;

        const response = await fetch('https://api.hashnode.com', {
          mode:'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: { slug, host },
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch article details');
        }

        const data = await response.json();
        const post = data.data.post;

        if (post) {
          setArticleDetails({
            title: post.title,
            brief: post.brief,
            coverImage: post.coverImage,
            dateAdded: post.dateAdded,
            author: post.author,
          });
        } else {
          throw new Error('Article not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [articleUrl]);

  return { articleDetails, loading, error };
}

function extractSlugAndHost(url: string): { slug: string | null; host: string | null } {
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
    
    return { 
      host: parsedUrl.hostname,
      slug: pathParts[pathParts.length - 1]
    };
  } catch {
    return { slug: null, host: null };
  }
}