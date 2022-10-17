import GlobalLayout from '../components/layout/GlobalLayout.js'
import Image from 'next/image'
import HomeHeader from '../components/header/HomeHeader.js'
import style from '../styles/scss/pages/Home.module.scss'

import thoughtPic from '../public/images/hero/thoughts.png'
import experimentPic from '../public/images/hero/experiments.png'
import self from '../public/images/hero/self1.jpg'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Link from 'next/link.js'

export default function Home() {
  return (
      <div> 
        <Container className='p-sm-0'>
          <HomeHeader />
          <Row className="justify-content-md-center">
          <Col xs={12} lg={{span:8}} xl={{span: 7}}>
              <div className={`${style.portraitBubble} bg-secondary mt-5 border border-3 border-secondary overflow-hidden`}>
                <Image src={self} layout='responsive' placeholder='blur' alt=""/>
              </div>
              <p className='text-center text-secondary mt-3 mb-5 fs-4'>{`I'm Jacob Murphy.`}</p>
              <div className="rounded-4 overflow-hidden bg-light text-dark text-start p-4 shadow-lg mt-5">
                <h1 className='text-center mt-3'>They call me <span className="text-primary">Murph</span>.</h1>
                <div className='text-left my-4 px-3'>
                  <p>{`I'm a software creator and explorer of ideas.`}</p>
                  <p>{`
                    Currently, I work for `}<a target="_blank" href="https://www.brookwoodchurch.org/" rel="noreferrer">Brookwood Church</a>. {` 
                    As the sole developer for a large church, I am responsible for everything from database administration, reporting, and workflow automation to front-end website development and (sometimes) copywriting.
                    `}</p>
                  <p>
                    {`In addition to my work at Brookwood, I've engaged in a side project called `}<a target="_blank" href="https://stemmastudy.com" rel="noreferrer">StemmaStudy</a>{`.
                    StemmaStudy lets you make what I've designated "Connected Flashcards" online. It's a method of studying that integrates many different `}<a target="_blank" href="https://stemmastudy.com/learn" rel="noreferrer">human learning principles</a>{` in a cohesive way.
                    Long story short: it's a better way to learn things.`}
                  </p>
                  <p>
                    {`I like to solve daunting problems and try new, daring things. 
                    I would rather effortfully engage in risky, rational leaps than take comfortable, unquestionable steps. The preferred object of my work is a hypothesis, not an axiom.
                  `}</p>
                  <p>{`This website is my sketchpad and my laboratory. It is where I embark on new ideas and explore possibilities before creating the actualities that will empower others. 
                    This website is a portal into the innermost recesses of my mind. Pardon the mess.`}</p>
                </div>
                
                
              
                <div className='text-center mb-3'>
                  <Link href="/about" passhref>
                    <Button variant="primary">More About Me</Button>
                  </Link>
                </div>
              </div>

            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={{span: 5, offset:1}} className='mt-5'>
              <div className="rounded-4 overflow-hidden bg-transparent text-dark text-center shadow-lg h-100 d-flex flex-column">
                  <Image className={`${style.cardImg} `} src={thoughtPic} layout='responsive' placeholder='blur' alt=""/>
                  <div className='bg-light flex-grow-1'>
                  <div className="p-4 d-flex flex-column justify-content-between h-100">
                    <p className='my-4 fs-5'>I find some ideas worth writing about.</p>
                    <div className='text-center mb-3'>
                      <Link href="/thoughts" passhref>
                        <Button variant="primary">Read My Thoughts</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={{span: 5}} className='mt-5'>
              <div className="rounded-4 overflow-hidden bg-transparent text-dark text-center shadow-lg h-100 d-flex flex-column">
                <Image className={`${style.cardImg}`} src={experimentPic} layout='responsive' placeholder='blur' alt=""/>
                <div className='bg-light flex-grow-1'>
                  <div className="p-4 d-flex flex-column justify-content-between h-100">
                    <p className='my-4 fs-5'>This is my playground for digital exploration.</p>
                    <div className='text-center mb-3'>
                      <Link href="/experiments" passhref>
                        <Button variant="primary">Tinker with my Creations</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 text-center">
            <Col xs={12} lg={{span: 5}} >
              <div className='bg-dark p-5 text-light rounded-4 shadow-lg border border-1 border-secondary'>
                <h2 className="mb-4">MXM is an Ethos.</h2>
                <Link href="/thoughts/embark-explore-empower"><a className={`${style.mxm}`}>Learn More</a></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'Homepage | Murph'} description={'The best website ever.'}>
      {page}
    </GlobalLayout>
  )
}