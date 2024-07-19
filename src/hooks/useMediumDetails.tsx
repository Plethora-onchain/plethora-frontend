import { useState, useEffect } from "react";

interface MediumArticleDetails {
  title: string;
  description: string;
  thumbnail: string;
  pubDate: string;
  author: string;
  link: string;
}

export function useMediumArticleDetails(
  articleUrl: string | null,
  platform: string | null
) {
  const [mediumArticleDetails, setMediumArticleDetails] =
    useState<MediumArticleDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleUrl || platform !== "medium") {
      setMediumArticleDetails(null);
      return;
    }

    const fetchMediumArticleDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/medium-articles?url=${encodeURIComponent(articleUrl)}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || "Failed to fetch Medium article details"
          );
        }

        const data = await response.json();
        setMediumArticleDetails(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticleDetails();
  }, [articleUrl, platform]);

  return { mediumArticleDetails, loading, error };
}
