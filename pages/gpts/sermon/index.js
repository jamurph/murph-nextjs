import GlobalLayout from '../../../components/layout/GlobalLayout.js'
import { Container, Row, Col } from 'react-bootstrap'
import GPTCard from '../../../components/gpts/GPTCard.js'


export default function FunGPTS() {

    var featured = [
        {
            title: 'Sermon Supervisor',
            description: 'This is your guide to the suite of GPTs, below. The Sermon Supervisor connects you to whichever GPTs you need!',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-3tOnHeYQJ-sermon-supervisor-find-the-right-gpt-for-you',
            badge: 'Start Here'
        }
    ]

    var allSermonGPTS = [
        {
            title: 'Christian Philosopher and Theologian',
            description: 'Insightful guide in Christian philosophy and theological thought.',
            image_url: '/images/gpt_images/christian_philosopher_theologian.png',
            link: 'https://chat.openai.com/g/g-2zd9AEebf-christian-philosopher-and-theologian',
        },
        {
            title: 'Faithful Discourse',
            description: 'Generates thoughtful church group discussion questions.',
            image_url: '/images/gpt_images/faithful_discourse.png',
            link: 'https://chat.openai.com/g/g-myn6xHJz9-faithful-discourse',
        },
        {
            title: 'Sermon Assistant: Application Architect',
            description: 'Identifies a sermon\'s key messages and suggests actionable, real-life applications.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-XyBvVaZfe-sermon-assistant-application-architect',
        },
        {
            title: 'Sermon Assistant: Confusion Crusher',
            description: 'Identifies complex or ambiguous sections of sermon manuscripts and suggests simplifications or explanations.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-ULb1ZeGKr-sermon-assistant-confusion-crusher',
        },
        {
            title: 'Sermon Assistant: Doubt Destroyer',
            description: 'Identifies areas in a sermon manuscript that might provoke skepticism and helps you provide supporting arguments or evidence.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-LSkloXUGv-sermon-assistant-doubt-destroyer',
        },
        {
            title: 'Sermon Assistant: Emotion Enhancer',
            description: 'Identifies sections needing heightened emotional engagement and suggests emotive language, stories, or imagery.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-L3VHlDlof-sermon-assistant-emotion-enhancer',
        },
        {
            title: 'Sermon Assistant: Flow Fixer',
            description: 'Identifies disjointed transitions and suggests improvements for narrative coherence.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-H5K8dQDlO-sermon-assistant-flow-fixer',
        },
        {
            title: 'Sermon Assistant: Harmony Herald',
            description: 'Indentifies contentious points and suggests balanced perspectives or conciliatory language.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-bmNAZNFdr-sermon-assistant-harmony-herald',
        },
        {
            title: 'Sermon Assistant: History Contextualizer',
            description: 'Identifies scriptural passages needing historical context and suggests relevant historical/cultural insights.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-jTWdbimpI-sermon-assistant-history-contextualizer',
        },
        {
            title: 'Sermon Assistant: Illustration Illuminator',
            description: 'Identifies key points needing illustration and suggests relevant stories or metaphors.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-N9CGQ6OaG-sermon-assistant-illustration-illuminator',
        },
        {
            title: 'Sermon Assistant: Power Pumper',
            description: 'Identifies key persuasive points and suggests rhetorical enhancements to improve audience receptivity.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-n6PmMpaT0-sermon-assistant-power-pumper',
        },
        {
            title: 'Sermon Assistant: Scripture Synthesizer',
            description: 'Identifies areas in your sermon manuscript that could use more scriptural support and suggests relevant scripture.',
            image_url: '/images/gpt_images/podium.png',
            link: 'https://chat.openai.com/g/g-tqkcxxTPK-sermon-assistant-scripture-synthesizer',
        },
    ]



    return (
        <div>
            <Container className='text-light'>
                <h1 className='text-center mt-5'>
                    Sermon GPTs
                </h1>
                <p className="text-center mb-5">Create more compelling, understandable, and impactful sermons.</p>
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
            </div><h3 className='text-light text-center'>All Sermon GPTs</h3>
            <div className="d-flex flex-wrap justify-content-evenly mb-5 m-auto" style={{ maxWidth: '1500px' }}>
                {allSermonGPTS.map((card, index) => (
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
        <GlobalLayout title={'Sermon GPTs by Murph'} description={'Browse Christian Sermon Helper GPTs built by me.'}>
            {page}
        </GlobalLayout>
    )
}