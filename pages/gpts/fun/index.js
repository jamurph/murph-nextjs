import GlobalLayout from '../../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import GPTCard from '../../../components/gpts/GPTCard.js'


export default function FunGPTS() {

    var featured = [
        {
            title: 'Architect of Hyperbolized Occupational Epithets',
            description: 'Crafts creatively exaggerated job titles, merging witty satire with complex corporate jargon.',
            image_url: '/images/gpt_images/title_satire.png',
            link: 'https://chat.openai.com/g/g-xuawu5W7b-architect-of-hyperbolized-occupational-epithets',
        },
        {
            title: 'Bart the Bard',
            description: 'Merry minstrel of Shakespearean verse and wit.',
            image_url: '/images/gpt_images/bart.png',
            link: 'https://chat.openai.com/g/g-IQg0V7Dd6-bart-the-bard',
        },
        {
            title: 'Blurg the Caveman',
            description: 'Small word, big meaning. Talk quick, make sense. Like old days. You like, you try.',
            image_url: '/images/gpt_images/blurg.png',
            link: 'https://chat.openai.com/g/g-btxhJlA2t-blurg-the-caveman',
        },
        {
            title: 'Kurokage the Anime Villain',
            description: 'Grandiose schemes and dramatic flair.',
            image_url: '/images/gpt_images/kurokage.png',
            link: 'https://chat.openai.com/g/g-0XSyfP3yq-kurokage-the-anime-villain',
        },
    ]




    return (
        <div>
            <Container className='text-light'>
                <h1 className='text-center mt-5'>
                    For Fun!
                </h1>
                <p className="text-center mb-5">GPTs designed to bring delight and enjoyment.</p>
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

FunGPTS.getLayout = function getLayout(page) {
    return (
        <GlobalLayout title={'Browse Fun GPTs | MXM'} description={'GPTs designed to bring delight and enjoyment.'}>
            {page}
        </GlobalLayout>
    )
}