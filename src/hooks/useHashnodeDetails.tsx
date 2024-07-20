// useHashnodeArticleDetails.ts
import { useState, useEffect } from "react";

interface HashnodeArticleDetails {
  title: string;
  brief: string;
  content: object;
  coverImage: string;
  publishedAt: string;
  author: {
    name: string;
    username: string;
  };
}

export function useHashnodeArticleDetails(
  articleUrl: string | null,
  platform: string | null
) {
  const [hashnodeDetails, setHashnodeArticleDetails] =
    useState<HashnodeArticleDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleUrl || platform !== "hashnode") {
      setHashnodeArticleDetails(null);
      return;
    }

    const fetchArticleDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const { slug, host } = extractSlugAndHost(articleUrl);
        if (!slug || !host) {
          throw new Error("Invalid Hashnode article URL");
        }

        const query = `
          query GetArticle($host: String!, $slug: String!) {
            publication(host: $host) {
              post(slug: $slug) {
                title
                brief
                coverImage {
                  url
                }
                content {
                  html
                }
                publishedAt
                author {
                  name
                  username
                }
              }
            }
          }
        `;

        const response = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: { host, slug },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch article details");
        }

        const data = await response.json();

        const post = data.data.publication.post;

        if (post) {
          setHashnodeArticleDetails({
            title: post.title,
            brief: post.brief,
            content: post.content,
            coverImage: post.coverImage.url,
            publishedAt: post.publishedAt,
            author: post.author,
          });
        } else {
          throw new Error("Article not found");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [articleUrl, platform]);

  return { hashnodeDetails, loading, error };
}

function extractSlugAndHost(url: string): {
  slug: string | null;
  host: string | null;
} {
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

    return {
      host: parsedUrl.hostname,
      slug: pathParts[pathParts.length - 1],
    };
  } catch {
    return { slug: null, host: null };
  }
}
