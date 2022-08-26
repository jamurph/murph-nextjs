import styles from '../../styles/scss/pages/thoughts/article.module.scss'

import GlobalLayout from '../../components/layout/GlobalLayout.js'

import { fetchAPI } from '../../lib/api.js'

import { getStrapiMedia } from '../../lib/media.js'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image.js';

import ReactMarkdown from 'react-markdown';

export default function Article({article}) {
    return (
        <GlobalLayout title={'Thought | Murph'} description={'The best website ever.'}>
            <Container className="my-5">
                <Row>
                    <Col xs={12} lg={{span: 10, offset: 1}}>
                        <div className={`${styles.article} bg-light text-dark p-3 p-sm-5 rounded-4 shadow-lg`}>
                            <h2 className="text-center mb-3">{article.attributes.title}</h2>
                            <div className="w-25 border-top border-3 mx-auto mb-5 border-secondary rounded-1"></div>
                            <div className="shadow-lg mb-5 rounded-3 overflow-hidden">
                                <Image className='rounded-3' src={getStrapiMedia(article.attributes.image)} layout="responsive" width={1920} height={1080} alt="" />
                            </div>
                            <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </GlobalLayout>
    );
}


Article.getLayout = function getLayout(page) {
    return (
        <>{page}</>
    );
}


export async function getServerSideProps({params}){
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image"],
    });
    return {
        props: {article: articlesRes.data[0]}
    };
}