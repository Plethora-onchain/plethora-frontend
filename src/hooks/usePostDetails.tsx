// // useArticleDetails.ts
// import { useState, useEffect } from 'react';
// import { useYouTubeDetails } from './useYouTubeDetails';
// import { useHashnodeArticleDetails } from './useHashnodeDetails';
// import { useMediumArticleDetails } from './useMediumDetails';

// type Platform = 'youtube' | 'hashnode' | 'medium' | 'unknown';

// interface ArticleDetails {
//   title: string;
//   description: string;
//   thumbnail: string;
//   publishedDate?: string;
//   author: string;
//   url: string;
//   platform: Platform;
// }

// function determinePlatform(url: string): Platform {
//   if (url.includes('youtube.com') || url.includes('youtu.be')) {
//     return 'youtube';
//   } else if (url.includes('hashnode.com')) {
//     return 'hashnode';
//   } else if (url.includes('medium.com')) {
//     return 'medium';
//   }
//   return 'unknown';
// }

// export function useArticleDetails(postUrl: string | null) {
//   const [articleDetails, setArticleDetails] = useState<ArticleDetails | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const { videoDetails, loading: ytLoading, error: ytError } = useYouTubeDetails(postUrl);
//   const { articleDetails: hashnodeDetails, loading: hnLoading, error: hnError } = useHashnodeArticleDetails(postUrl);
//   const { mediumArticleDetails, loading: mdLoading, error: mdError } = useMediumArticleDetails(postUrl);

//   useEffect(() => {
//     if (!postUrl) {
//       setArticleDetails(null);
//       setLoading(false);
//       setError(null);
//       return;
//     }

//     const platform = determinePlatform(postUrl);
//     setLoading(true);

//     switch (platform) {
//       case 'youtube':
//         if (videoDetails) {
//           setArticleDetails({
//             title: videoDetails.title,
//             description: videoDetails.description,
//             thumbnail: videoDetails.thumbnailUrl,
//             author: videoDetails.channelTitle,
//             url: postUrl,
//             platform: 'youtube'
//           });
//         }
//         setLoading(ytLoading);
//         setError(ytError);
//         break;
//       case 'hashnode':
//         if (hashnodeDetails) {
//           setArticleDetails({
//             title: hashnodeDetails.title,
//             description: hashnodeDetails.brief,
//             thumbnail: hashnodeDetails.coverImage,
//             publishedDate: hashnodeDetails.publishedAt,
//             author: hashnodeDetails.author.name,
//             url: postUrl,
//             platform: 'hashnode'
//           });
//         }
//         setLoading(hnLoading);
//         setError(hnError);
//         break;
//       case 'medium':
//         if (mediumArticleDetails) {
//           setArticleDetails({
//             title: mediumArticleDetails.title,
//             description: mediumArticleDetails.description,
//             thumbnail: mediumArticleDetails.thumbnail,
//             publishedDate: mediumArticleDetails.pubDate,
//             author: mediumArticleDetails.author,
//             url: postUrl,
//             platform: 'medium'
//           });
//         }
//         setLoading(mdLoading);
//         setError(mdError);
//         break;
//       default:
//         setError('Unsupported platform');
//         setLoading(false);
//     }
//   }, [postUrl, videoDetails, hashnodeDetails, mediumArticleDetails, ytLoading, hnLoading, mdLoading, ytError, hnError, mdError]);

//   return { articleDetails, loading, error };
// }