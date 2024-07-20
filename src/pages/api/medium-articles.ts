// pages/api/medium-article.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";

const parser = new Parser();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (typeof url !== "string") {
    return res.status(400).json({ error: "Invalid URL parameter" });
  }

  try {
    const { username, slug } = extractUsernameAndSlug(url);
    if (!username || !slug) {
      return res.status(400).json({ error: "Invalid Medium article URL" });
    }

    const rssUrl = `https://medium.com/feed/@${username}`;
    const feed = await parser.parseURL(rssUrl);

    const article = feed.items.find((item) => item.link?.includes(slug));
    // console.log(article);

    if (!article) {
      return res.status(404).json({ error: "Medium article not found" });
    }

    const articleDetails = {
      title: article.title || "",
      description: article["content:encodedSnippet"] || "",
      thumbnail: extractThumbnail(article["content:encoded"] || ""),
      pubDate: article.pubDate || "",
      author: article.creator || "",
      link: article.link || "",
      content: article["content:encoded"] || "",
    };

    res.status(200).json(articleDetails);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the article" });
  }
}

function extractUsernameAndSlug(url: string): {
  username: string | null;
  slug: string | null;
} {
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

    if (pathParts.length < 2) {
      return { username: null, slug: null };
    }

    return {
      username: pathParts[0],
      slug: pathParts[pathParts.length - 1],
    };
  } catch {
    return { username: null, slug: null };
  }
}

function extractThumbnail(content: string): string {
  const imgRegex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
  const match = imgRegex.exec(content);
  return match ? match[1] : "";
}
