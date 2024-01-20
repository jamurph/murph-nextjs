import { getDocuments } from 'outstatic/server'

export default async function Index() {
    /*const posts = await getData()
    return posts.map((post) => <h1 key={post.slug}>{post.title}</h1>)*/
    return <h1>test</h1>
}

async function getData() {
    /*const posts = getDocuments('posts', ['title', 'slug'])*/

    return {}
}