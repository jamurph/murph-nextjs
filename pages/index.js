import GlobalLayout from '../components/layout/GlobalLayout.js'
import Image from 'next/image'
import HomeHeader from '../components/header/HomeHeader.js'
import style from '../styles/scss/pages/Home.module.scss'

import thoughtPic from '../public/images/hero/thoughts.png'
import experimentPic from '../public/images/hero/experiments.png'
import self from '../public/images/hero/self1.jpg'
import spaceship from '../public/images/hero/spaceship.png'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Link from 'next/link.js'

export default function Home() {
  return (
    <div>
      <Container className='p-sm-0'>
        { /*<HomeHeader /> */}
        <Row style={{ marginTop: '100px' }} className="justify-content-md-center">
          <Col xs={12} lg={{ span: 8 }} xl={{ span: 7 }}>
            <div style={{ maxWidth: '400px', width: '100%', margin: 'auto' }} className="rounded-circle border border-3 border-secondary backlit overflow-hidden">
              <Image className='rounded-circle' style={{ zIndex: 0 }} src={spaceship} layout='responsive' placeholder='blur' alt="" />
            </div>
            <div className="text-center text-light mt-5">
              <h1><b>MAKE BOLD LEAPS</b></h1>
              <div className='border border-1 border-secondary m-auto' style={{ width: '300px', height: '1px' }}></div>
              <h4 className='mt-5'>Innovation Empowers the Audacious</h4>
              <p className='mt-4'>{"Tools to champion the curious. Embrace the thrill of bold, calculated risks over the safety of the known. Explore new dimensions of innovation. Empower your vision with AI that's as adventurous and analytical as you are, unlocking a future shaped by your imagination."}</p>
              <Link href="/about" passhref>
                <Button className='lightLink'>View GPTs</Button>
              </Link>
            </div>

            <div className='' style={{ width: '100%', height: '1px', marginTop: '75px', marginBottom: '75px', marginLeft: 'auto', marginRight: 'auto' }}></div>


            <div style={{ zIndex: 1 }} className={`${style.portraitBubble} bg-secondary mt-5 border border-3 border-secondary overflow-hidden`}>
              <Image style={{ zIndex: 0 }} src={self} layout='responsive' placeholder='blur' alt="" />
            </div>
            <p className='text-center text-secondary mt-3 mb-5 fs-4'>{`Made by Me.`}</p>
            <div className="rounded-4 overflow-hidden bg-light text-dark text-start p-4 shadow-lg mt-5">
              <h1 className='text-center mt-3'>They call me <span className="text-primary">Murph</span>.</h1>
              <div className='text-left my-4 px-3'>
                <p>{`I'm a software developer.`}</p>
                <p>{`
                    I like to dive into the digital frontier. I like to know how things work and how to make things work for us. I've a passion for problem-solving and a penchant for the path less traveled.
                    `}
                </p>
                <p>{`
                    At the heart of my work is a commitment to innovation and an embrace of the bold leaps necessary to lead change. The preferred object of my work is a hypothesis, not an axiom, as the precondition for both genuine learning and valuable progress is the possibility of error.
                    `}
                </p>
                <p>{`
                    I believe we live in the most interesting time in history. Ours is an era of rapid transformation, driven by unprecedented access to information and the technologies, like AI, that use it. Our science fiction was never imaginative enough!
                    `}
                </p>
                <p>
                  {`As we learn to navigate past these new horizons, I am guided by the simple ethos of `}<b>MXM:</b>
                </p>
                <ul>
                  <li>Embrace Uncertainty and <b>Embark</b>.</li>
                  <li><b>Explore</b> as a Primary Goal.</li>
                  <li><b>Empower</b> the Pursuit of Meaning.</li>
                </ul>
              </div>



              <div className='text-center mb-3'>
                <Link href="/about" passHref>
                  <Button className='me-2' type="primary">More About Me</Button>
                </Link>
                <Link href="/ethos" passHref>
                  <Button type="primary">My Ethos</Button>
                </Link>
              </div>
            </div>

          </Col>
        </Row>
        {/* 
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
                        <Button variant="primary">Tinker Around</Button>
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
                <h2 className="mb-4">MXM is my Ethos.</h2>
                <Link href="/thoughts/embark-explore-empower"><a className={`${style.mxm}`}>Learn More</a></Link>
              </div>
            </Col>
          </Row>
          */}
      </Container>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'Homepage | Murph'} description={'Jacob Murphy: Software Developer and Idea Lover.'}>
      {page}
    </GlobalLayout>
  )
}



/* 

TODO:

MAKE BOLD LEAPS
Innovation Empowers the Audacious



*/