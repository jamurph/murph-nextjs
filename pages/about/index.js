/* eslint-disable react/no-unescaped-entities */
import GlobalLayout from '../../components/layout/GlobalLayout.js'
import Image from 'next/image'

import fam from '../../public/images/hero/fam.jpg'


import { Container, Row, Col } from 'react-bootstrap'
import Timeline from '../../components/timeline/Timeline.js'
import TimelineItem from '../../components/timeline/TimelineItem.js'

export default function About() {
  return (
      <div> {/* style={{background: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'top'}} */}
        <Container className='text-light'>
          <h1 className='text-center mt-5'>
          About Me.
          </h1>
          <p className="text-center mb-5">But, mostly, about the things I enjoy and find worthwhile.</p>
          <Row className='my-5'>
            <Col xs={12} lg={5} className="mt-3">
              <div className='rounded-4 shadow-lg'>
                <Image className='rounded-4' src={fam} layout='responsive' placeholder='blur' alt=""/>
              </div>
            </Col>
            <Col xs={12} lg={7} className='mt-3'>
              <div className='bg-light rounded-4 h-100 text-dark p-3 p-sm-5 d-flex flex-column justify-content-center shadow-lg'>
                <p>
                  There's something that feels odd about writing a page "About Me." I've spent my entire lifetime with myself, and, yet, 
                  I don't think I could give you a definitive answer as to "who I am". I still surprise myself. Plus, I like open questions.
                </p>
                <p>If an ultimate, complete, and consistent description of who I am could fit on this page, it wouldn't be worth reading.</p>
                <p className='mb-0'>Instead of telling you about the essence of "me" &ndash; replete with transient <em>"I am a..."</em> declarations &ndash; I'll just tell you where I've been, what I've done, and about the matters that make me move.</p>
              </div> 
            </Col>
          </Row>
          <Row className='my-5'>
            <Col lg={{span: 8, offset:2}}>
              <div className=' bg-dark shadow-lg border-1 border-secondary border p-3 p-sm-5 rounded-4'>
                <h2 className='mb-0 text-center'>TL;DR</h2>
                <p className='text-secondary mt-0 text-center'>aka <em>The Big Picture</em></p>
                <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.</p>
                <p>
                  I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                </p>
                <p>
                  I created <a className='link-dark-accent' href="https://stemmastudy.com/" target="_blank" rel="noreferrer">StemmaStudy.com</a> to help us learn better. It definitely doesn't make learning easy, but it does make our time more effective.
                </p>
                <p>
                  I love the science of learning. I've taken recent interests in philosophy &ndash; especially epistemology, the nature of logic, and rational bases for believing in the existence of God. I play drums.
                </p>
                <p>
                  Conscious learning makes us human. I want to make us more human.
                </p>
              </div>
            </Col>
          </Row>
          <Row className='my-5'>
            <Col xs={12} lg={{span: 10, offset: 1}}>
              <div className="text-light">
                <h2 className='text-center'>Milestones that Made Me</h2>
                
                <Timeline>
                  <TimelineItem>
                      <h4 className='text-center'>Upbringing</h4>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Education</h4>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Marriage</h4>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Working at Brookwood Church</h4>
                      <p>Got the job after working for Follett. Follett taught me ___. unique opportunity as a solo dev. A lot of diversity of type of work. Explorative.</p>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Creating StemmaStudy</h4>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                      <p>I'm currently employed as a Software Developer. I work for a really big church as their only developer.
                        I enjoy working on a disparate set of things. I really like to learn and to be thrown at problems. I'm pretty good at that. 
                      </p>
                  </TimelineItem>
                </Timeline>
              </div>
            </Col>
          </Row>
          <Row className='my-5'>
            <Col>
              <div className="bg-dark text-light p-3 p-sm-5 rounded-4 border-1 border-secondary border shadow-lg">
                <h2 className='text-center'>Skills Earned Along the Way</h2>
                <p>We'll start with specific tech stacks in more major projects. Specific tech things should be hoverable&amp;clickable to have popover of my opinion on them.</p>
                <Container fluid>
                  <Row className="text-center">
                    <Col xs={12} lg={4}>
                      mxm.dev
                    </Col>
                    
                    <Col xs={12} lg={4}>
                      StemmaStudy.com
                    </Col>

                    <Col xs={12} lg={4}>
                      brookwoodchurch.org
                    </Col>
                  </Row>
                  <p>Here are other things I could think of that I have used before in more limited contexts. 
                    I'm sure for many of these I would not be able to pick up and just use. However, relearning is much faster than first-time learning (how much faster?).
                    So, I think they're worth mentioning.  
                  </p>
                  <p>Hoverable map of other technologies: flex wrap, set width, space</p>

                  <p>If we're being honest, all of these really boil down to three skills: 
                    the ability to comprehend documentation, the ability to discern when documentation needs to be read, 
                    and, lastly, the ability to endure the painful, writhing agony of actually reading the documentation.</p>
                </Container>
                  
              </div>
            </Col>
          </Row>
          <Row className='my-5'>
            <Col>
              <div className="bg-light text-dark p-3 p-sm-5 rounded-4 shadow-lg">
                <h2 className='text-center'>Horizons</h2>
                <p>What am I interested in doing? Where am I going?</p>
                <p>Detach all self-centeredness from ambition. What would you hope to do? What are your most lofty aspirations?</p>
                <p>-- seems like another angle at "What do you find worth pursuing"  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'About | Murph'} description={'The best website ever.'}>
      {page}
    </GlobalLayout>
  )
}