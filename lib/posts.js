import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: "https://database.leonadigitalarts.net",
    key: "64568183d4a7e3bcc959e11910",
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