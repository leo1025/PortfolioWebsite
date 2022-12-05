import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: "http://localhost:2368",
    key: process.env.GHOST_CONTENT_API_KEY,
    version: "v5.0"
});

export async function getAllPosts() {
    const posts = await api.posts.browse({ limit: 'all'});
    return posts;
}

export async function getTopThree() {
    const posts = await api.posts.browse({ limit: '3' });
    return posts;
}

export async function getPostFrom(postSlug) {
    const post = await api.posts.read({ slug: postSlug, include: 'tags'  });
    return post;
}