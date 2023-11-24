import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'

export default function GPTS() {

    var featured = [
        {
            title: 'Blurg the Caveman',
            description: 'Small word, big meaning. Talk quick, make sense. Like old days. You like, you try.',
            image_url: '/images/gpt_images/blurg.png',
            link: 'https://chat.openai.com/g/g-btxhJlA2t-blurg-the-caveman',
            badge: 'For Fun!'
        },
    ]
    var categories = [
        { title: 'For Fun!', description: 'GPTs designed to bring delight and enjoyment.', link: '/gpts/fun' },
    ]



    return (
        <div>
            <Container className='text-light'>
                <h1 className='text-center mt-5'>
                    AI Assistants and Tools
                </h1>
                <p className="text-center mb-5">Enhancing Life and Work with Custom-Tailored Intelligence</p>
            </Container>
        </div>
    )
}

GPTS.getLayout = function getLayout(page) {
    return (
        <GlobalLayout title={'GPTs by Murph'} description={'Browse GPTs built by me.'}>
            {page}
        </GlobalLayout>
    )
}