import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import Image from 'next/image'

import { getDocumentPaths, getDocumentBySlug } from 'outstatic/server'

import styles from '../../styles/scss/pages/blog/article.module.scss'


export default function Article({ post }) {
    return (
        <GlobalLayout title={'Thought | Murph'} description={'The best website ever.'}>
            <Container className="my-5">
                <Row>
                    <Col xs={12} lg={{ span: 8, offset: 2 }}>
                        <div className={`${styles.article} bg-light text-dark p-3 p-sm-5 rounded-4 shadow-lg`}>
                            <h2 className="text-center mb-3">{post.title}</h2>
                            <div className="w-25 border-top border-3 mx-auto mb-5 border-secondary rounded-1"></div>
                            <div className="shadow-lg mb-5 rounded-3 overflow-hidden">
                                <Image className='rounded-3' src={post.coverImage} layout="responsive" width={1920} height={1080} alt="" />
                            </div>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} >{post.content}</ReactMarkdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </GlobalLayout>
    )
}


Article.getLayout = function getLayout(page) {
    return (
        <>{page}</>
    );
}

export async function getStaticPaths() {
    return {
        paths: getDocumentPaths('Posts'),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = getDocumentBySlug('Posts', params.slug, [
        'title',
        'slug',
        'content',
        'coverImage'
    ])
    console.log(post)
    return {
        props: {
            post: {
                ...post,
            }
        }
    }
}