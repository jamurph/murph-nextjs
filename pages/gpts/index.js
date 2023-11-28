import GlobalLayout from '../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import GPTCard from '../../components/gpts/GPTCard.js'
import GPTCategory from '../../components/gpts/GPTCategory.js'

export default function GPTS() {

    var featured = [
        {
            title: 'AI Diagram Designer: Smart Mind Map & Chart Maker',
            description: 'Craft detailed flowcharts, concept maps, and process diagrams that transform raw data into clear, impactful graphs and presentations or streamline workflow and planning.',
            image_url: '/images/gpt_images/diagram_designer.png',
            link: 'https://chat.openai.com/g/g-rCajQrvhP-ai-diagram-designer-smart-mind-map-chart-maker',
            badge: 'Image'
        },
        {
            title: 'Blurg the Caveman',
            description: 'Small word, big meaning. Talk quick, make sense. Like old days. You like, you try.',
            image_url: '/images/gpt_images/blurg.png',
            link: 'https://chat.openai.com/g/g-btxhJlA2t-blurg-the-caveman',
            badge: 'For Fun!'
        },
        {
            title: 'Word Wizardry: The Copywriting Alchemist',
            description: 'Crafting your message, perfectly, where each word is meticulously chosen for impact.',
            image_url: '/images/gpt_images/word_wizardry.png',
            link: 'https://chat.openai.com/g/g-B1lu8Jt74-word-wizardry-the-copywriting-alchemist',
            badge: 'General'
        },
        {
            title: 'Flora/Fauna Finder: Animal & Plant Identification',
            description: 'Discover wildlife through your photos! Experience detailed botanical/zoological image analysis for precise species recognition.',
            image_url: '/images/gpt_images/flora_fauna.png',
            link: 'https://chat.openai.com/g/g-awKSahOqY-flora-fauna-finder-animal-plant-identification',
            badge: 'Image'
        },
        {
            title: 'Sermon Supervisor',
            description: 'Seamlessly connects you to specialized assistants for every sermon-related need. This is your guide to a whole suite of sermon-related GPTs!',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-3tOnHeYQJ-sermon-supervisor-find-the-right-gpt-for-you',
            badge: 'Sermon'
        },
        {
            title: 'Wise Wellness Coach',
            description: 'Harness the Power of Counseling, Psychology, and Targeted Self-Improvement for Personal Development and Transform Your Life.',
            image_url: '/images/gpt_images/wise_wellness_coach.png',
            link: 'https://chat.openai.com/g/g-1bTcAGIcw-wise-wellness-coach',
            badge: 'General'
        }
    ]
    var categories = [
        { title: 'For Fun!', description: 'Who said AI can\'t be fun? Dive into a world where artificial intelligence isn\'t just smart—it\'s humorous, quirky, and always entertaining. From witty banter to unexpected jokes, experience the lighter side of AI. It\'s not just about algorithms and data; it\'s about accessing the best and most interesting aspects of humanity on demand!', link: '/gpts/fun' },
        { title: 'General', description: 'AI to enhance the everyday. Whether helping you think by analyzing options, helping you learn, helping you word something, or even helping you diagram something.', link: '/gpts/general' },
        { title: 'Images', description: 'AI and imagery is love at first sight! It\'s fusion that unlocks possibilities and redefines the boundaries of creativity in technology.', link: '/gpts/image' },
        { title: 'Sermon Preparation', description: 'Elevate Every Sermon to a Masterpiece: With these assistants focusing on clarity, emotional resonance, historical context, and scriptural foundations, your sermons will captivate and inspire. Imagine delivering messages that not only convey wisdom but also engage every listener, creating a lasting impact.', link: '/gpts/sermon' },
    ]



    return (
        <div>
            <Container className='text-light'>
                <h1 className='text-center mt-5'>
                    AI Assistants and Tools
                </h1>
                <p className="text-center mb-5">Enhancing Life and Work with Custom-Tailored Intelligence</p>


            </Container>
            <h3 className='text-light text-center'>Featured</h3>
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
            <Container className='pt-3 mb-5'>
                <h3 className='text-light text-center mt-5 mb-4'>GPT Categories</h3>

                {categories.map((card, index) => (
                    <GPTCategory
                        key={index}
                        title={card.title}
                        description={card.description}
                        href={card.link}
                    />
                ))}
            </Container>
        </div>
    )
}

GPTS.getLayout = function getLayout(page) {
    return (
        <GlobalLayout title={'GPTs by Murph'} description={'Blurg the Caveman, AI Diagram Designer, Sermon Supervisor, and more!'}>
            {page}
        </GlobalLayout>
    )
}