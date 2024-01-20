import MXMListItem from '../../components/MXMListItem.js'
import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container } from 'react-bootstrap'
import { getDocuments } from 'outstatic/server'

export default function Blog({ posts }) {
    const allPosts = posts.map((post) => <MXMListItem title={post.title} description={post.description} imageUrl={post.coverImage} href={`/blog/${post.slug}`} key={post.slug}></MXMListItem>)
    return (
        <div>
            <Container className="text-light">
                <h1 className='text-center mt-5'>
                    These are my thoughts.
                </h1>
                <p className='text-center mb-5'>Proceed with caution.</p>
                {allPosts}
            </Container>

        </div>
    )
}

export const getStaticProps = async () => {
    const posts = getDocuments('posts', ['title', 'slug', 'coverImage', 'description'])
    posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    return {
        props: { posts }
    }
}


Blog.getLayout = function getLayout(page) {
    return (
        <GlobalLayout title={'Murph\'s Musings'} description={'These are my thoughts. Proceed with caution.'}>
            {page}
        </GlobalLayout>
    )
}