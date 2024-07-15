import db from "../../../lib/weavedb";

export async function POST(request) {
  const { post_url, platform, title, content } = await request.json();

  try {
    const tx = await db.write('post_details', {
      title,
      content,
      post_url,
      platform,
      createdAt: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ success: true, tx }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}