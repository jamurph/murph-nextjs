import GlobalLayout from '../../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import GPTCard from '../../../components/gpts/GPTCard.js'


export default function GeneralGPTS() {

    var featured = [
        {
            title: 'Word Wizardry: The Copywriting Alchemist',
            description: 'Crafting your message, perfectly, where each word is meticulously chosen for impact.',
            image_url: '/images/gpt_images/word_wizardry.png',
            link: 'https://chat.openai.com/g/g-B1lu8Jt74-word-wizardry-the-copywriting-alchemist',
        },
        {
            title: 'Insight Architect',
            description: 'I provide deep, philosophical analysis of ideas and questions.',
            image_url: '/images/gpt_images/insight_architect.png',
            link: 'https://chat.openai.com/g/g-DpE4TBCdo-insight-architect',
        },
        {
            title: 'Wise Wellness Coach',
            description: 'Harness the Power of Counseling, Psychology, and Targeted Self-Improvement for Personal Development and Transform Your Life.',
            image_url: '/images/gpt_images/wise_wellness_coach.png',
            link: 'https://chat.openai.com/g/g-1bTcAGIcw-wise-wellness-coach',
        },
    ]




    return (
        <div>
            <Container className='text-light'>
                <h1 className='text-center mt-5'>
                    General GPTs
                </h1>
                <p className="text-center mb-5">AI to enhance the everyday.</p>
            </Container>
            <div className="d-flex flex-wrap justify-content-evenly mb-5 m-auto" style={{ maxWidth: '1500px' }}>
                {featured.map((card, index) => (
                    <GPTCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.image_url}
                        href={card.link}
                        badge={card.badge}
                    />
                ))}
            </div>
        </div>
    )
}

GeneralGPTS.getLayout = function getLayout(page) {
    return (
        <GlobalLayout title={'GPTs by Murph'} description={'Browse GPTs built by me.'}>
            {page}
        </GlobalLayout>
    )
}