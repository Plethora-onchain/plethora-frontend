// import { useRouter } from 'next/router';

export const useCreatePost = () => {
//   const router = useRouter();

  const createPost = async (post_url:string, platform:string, title?:string, content?:any) => {
    const response = await fetch('/api/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, post_url, platform }),
    });

    const data = await response.json();

    if (data.success) {
    //   router.push('/');
    console.log("successful");
    
    } else {
      alert('Error adding post');
    }
  };

  return createPost;
};