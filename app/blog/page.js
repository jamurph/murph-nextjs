import { getDocuments } from 'outstatic/server'

export default function Index({ posts }) {
    return posts.map((post) => <h1 key={post.slug}>{post.title}</h1>)
}

export const getStaticProps = async () => {
    const posts = getDocuments('posts', ['title', 'slug'])
    return {
        props: { posts }
    }
}