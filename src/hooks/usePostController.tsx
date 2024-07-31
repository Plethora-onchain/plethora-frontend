import { useState, useEffect } from "react";
import { Post } from "@/interfaces/Post";
import { getHubContract } from "@/constants/contracts";
import { useAccount, useContractRead } from "@starknet-react/core";
import abi from "../constants/plethora_hub_abi.json";
import { cairo, num, shortString } from "starknet";
export function usePostController() {
  const [initialized, setInitialized] = useState(false);
  const { account, address } = useAccount();

  const { data, isError, isLoading, error } = useContractRead({
    functionName: "get_all_posts",
    args: [],
    abi,
    address:
      "0x044d341a20b5ee1ae9e1a4bde42991efc8449231385a9ffbe5f90bef51f3b000",
    watch: true,
  });

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  const contract = getHubContract(account);

  useEffect(() => {
    // Initialize local storage if it doesn't exist
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify([]));
    }
    setInitialized(true);
  }, []);

  const addPost = async (postData: Omit<Post, "id" | "createdAt">) => {
    // console.log(postData);

    const create_post = await contract.post(
      postData.title,
      postData.content,
      postData.post_url,
      postData.img_url,
      postData.platform
    );

    return create_post;
  };

  const getPosts = () => {
    if (!Array.isArray(data)) return [];
    return data.map((obj: {}) => {
      const readableObj: { [key: string]: any } = {};
      for (const [key, value] of Object.entries(obj)) {
        // if (typeof value === 'bigint' || (typeof value === 'number' && value > Number.MAX_SAFE_INTEGER)) {

        //   readableObj[key] = '0x' + value.toString(16);
        // }

        readableObj[key] = shortString.decodeShortString(`${value}`);
      }
      return readableObj;
    });
  };

  const updatePost = async (
    id: Number,
    postData: Partial<Post>
  ): Promise<Post | null> => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const index = posts.findIndex((post: Post) => post?.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...postData };
      localStorage.setItem("posts", JSON.stringify(posts));
      return posts[index];
    }
    return null;
  };

  const deletePost = async (id: Number): Promise<boolean> => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const filteredPosts = posts.filter((post: Post) => post.id !== id);
    if (filteredPosts.length !== posts.length) {
      localStorage.setItem("posts", JSON.stringify(filteredPosts));
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
