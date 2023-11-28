import GlobalLayout from '../../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'

import GPTCard from '../../../components/gpts/GPTCard.js'

export default function ImageGPTs() {

    var featured = [

        {
            title: 'Flora/Fauna Finder: Animal & Plant Identification',
            description: 'Discover wildlife through your photos! Experience detailed botanical/zoological image analysis for precise species recognition.',
            image_url: '/images/gpt_images/flora_fauna.png',
            link: 'https://chat.openai.com/g/g-awKSahOqY-flora-fauna-finder-animal-plant-identification',
        },
        {
            title: 'AI Diagram Designer: Smart Mind Map & Chart Maker',
            description: 'Craft detailed flowcharts, concept maps, and process diagrams that transform raw data into clear, impactful graphs and presentations or streamline workflow and planning.',
            image_url: '/images/gpt_images/diagram_designer.png',
            link: 'https://chat.openai.com/g/g-rCajQrvhP-ai-diagram-designer-smart-mind-map-chart-maker',
        }
    ]




    return (
        <div>
            <Container className='text-light'>
                <h1 className='text-center mt-5'>
                    Image GPTs
                </h1>
                <p className="text-center mb-5">GPTs meant to engage with the visual world.</p>
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

ImageGPTs.getLayout = function getLayout(page) {
    return (
        <GlobalLayout title={'Image GPTs by Murph'} description={'Browse Image GPTs built by me.'}>
            {page}
        </GlobalLayout>
    )
}