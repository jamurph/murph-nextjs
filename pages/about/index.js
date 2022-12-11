/* eslint-disable react/no-unescaped-entities */
import GlobalLayout from '../../components/layout/GlobalLayout.js'
import Image from 'next/image'

import fam from '../../public/images/hero/fam.jpg'
import cassidy from '../../public/images/hero/cassidy.jpg'
import paw from '../../public/images/hero/paw.png'


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
                  There's something that feels odd about writing a page "About Me." I'm not sure I'm capable of giving a good self-description that is both complete and useful.
                </p>
                <p>I'm not confused &ndash; I just still surprise myself!</p>
                <p>I think the aphorism "Know Thyself" is a task which one can always make meaningful progress on but never complete &ndash; the goal shifts as you grow. If I could really write out on this page a complete description of who I am, it wouldn't be worth reading.</p>
                <p className='mb-0'>{`Instead, I'll just tell you where I've been, what I've done, and about the matters that make me move.`}</p>
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
                      <h4 className='text-center'>A Bit of Self-Discovery</h4>
                      <Row>
                        <Col xs={12} lg={{span: 8, offset: 2}}>
                          <p>I had to be one of my teachers' most dissapointing students. I always got by with decent grades, but I was unmotivated to learn. I wouldn't do homework and I never really gave any meaningful effort. </p>
                            <p>Still, I valued good grades and I wanted to do something worthwhile with my life, so I saw the value in things like AP classes.</p>
                            <p>I didn't technically meet the requirements for the AP Computer Science class. Yet, one of those teachers I disappointed regularly put me through anyways. Thank God.</p>
                            <p>I found a fire in myself while studying computer science. I was hungry to learn more. I experimented. I wrote prank programs that went fullscreen on my friends and resisted being closed. I would think about AP CS in other classes and would literally go home and read <em>Teach Yourself Java</em> (it was cool at the time) and watch <em>too many</em> online tutorials (including <a href="https://www.youtube.com/watch?v=Hl-zzrqQoSE&list=PLFE2CE09D83EE3E28&ab_channel=thenewboston">thenewboston</a>, of course).
                            </p>
                            <p>In CS, I finally found something I was motivated to learn more about and I established the very fruitful habit of engaging in edifying personal explorations on my own.</p>
                        </Col>
                      </Row>
                  </TimelineItem>
                  <TimelineItem>
                    <h4 className='text-center'>College</h4>
                    <Row>
                        <Col xs={12} lg={{span: 8, offset: 2}}>
                          <p>My High School experience gave me a really good foundation going into Clemson's Computer Science program. It was basically a breeze! I graduated early having more credits than needed and the new knowledge that I wanted nothing to do with accounting (I almost did a finance minor).</p>
                          <p>It definitely helped to have a group of incredibly smart friends who were also interested in doing well.</p>
                          <p>CS is a really broad field, and I don't think I ever really selected a specific niche while in College (or even since!). All of the problems CS tries to solve are interesting and similar in fundamental ways.</p>
                          <p>Also, Clemson starting destroying college football during my time there. I think I might be a good luck charm. You're welcome. Go Tigers.</p>
                          
                            <div className="w-50 m-auto">
                              <Image src={paw} layout='responsive' placeholder='blur' alt=""/>
                            </div>
                        </Col>
                      </Row>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Marriage</h4>
                      <Row>
                        <Col xs={12} lg={{span: 8, offset: 2}}>
                          <p>I'm grateful to have married the greatest woman in the world, Cassidy.</p>
                          <p>Cassidy is a brilliant writer, vocalist, pianist, music-therapist, earring-artist, and wife. She's incredibly gifted and takes care that everything she does is done well.</p>
                          <p>She helps me grow and be better. She pushes me to keep trying or to try new things when I get stuck.</p>
                          <p>She also prevents me from buying more books to put on the bookshelf until I've read enough of the ones that we already have. Nobody's perfect, I guess.</p>
                          <div className="w-75 m-auto">
                            <Image className='rounded-4' src={cassidy} layout='responsive' placeholder='blur' alt=""/>
                          </div>
                        </Col>
                      </Row>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Work</h4>
                      <Row>
                        <Col xs={12} lg={{span: 8, offset: 2}}>
                          <p>I've been working for Brookwood Church for the last 4 years, and I can tell that it has grown me quite a bit.</p>
                          <p>If I'm being honest, the <em>technical</em> challenges haven't been all that challenging. They seem like the usual sort of developer work: write clean SQL reports, make some workflows to vanquish excel, write webpages that use a CMS, etc. All very valuable things, but, at the same time, all very mundane.</p>
                          <p>The technical problems being solved at a church &ndash; and, really, almost everywhere else &ndash; are usually more like specific implementation problems rather than groundbreaking, new conceptual challenges.</p>
                          <p>All of that to say, one of the lessons I've learned from my work at Brookwood is that, while I do enjoy solving technical implementation problems, I have a real penchant for something more like technical <em>philosophy</em> problems.</p>
                          <p>Another great lesson, a result of being the only developer, is that I've had to interface more with users than I think most developers get the chance to. It is one thing to develop a feature to a user story you read on a screen, it is another thing entirely to know that user by name, meet with them about what they need, and then share their coffee machine.</p>
                          <p>Finally, I am grateful that I get to have my hands in almost every aspect: administrative processes, marketing, database administration, website development, reporting, and the list goes on. Knowing where to look and what to Google is definitely more than half the battle in software.</p>
                        </Col>
                      </Row>
                  </TimelineItem>
                  <TimelineItem>
                      <h4 className='text-center'>Memory: <em>Rethinking it</em></h4>
                      <Col xs={12} lg={{span: 8, offset: 2}}>
                        <p>Combine an ounce of curiosity, a pinch of motivation, and a global pandemic shutting down my other distractions, and I get <a href="https://stemmastudy.com/">StemmaStudy.com</a>.</p>
                        <p>You've heard the proverb "Give a man a fish and he will eat for a day, teach a man to fish and he will eat for a lifetime...". Well, let me tell you: if you teach a <em>forgetful</em> man to fish, he will <em>still</em> only eat for a day.</p>
                        <p>I bet if you try to mentally walk through just the structure and main ideas of your most recently read books and audiobooks, you would struggle to go on for more than a minute with each one. Yet, those books probably took you, on average, 10 hours to consume.</p>
                        <p>We often approach learning the wrong ways. We humans don't learn well through simple streams of information. Yet, it seems that's how most people structure their education.</p>
                        <p>I made StemmaStudy because I want to change the way people think about the way they learn. I want to make technological tools that structure and ensure meaningful human learning.</p>
                        <p>I have a lot of ideas I've yet to implement and I've implemented others in ways I wish I could redo! To create something like this from scratch has been one of the greatest learning experiences of my life. While it has proved much more difficult an endeavor than I realized, I have barely scratched the surface of some of the main ideas.</p>
                        <p>So, I am excited to continue exploring this area of personal R&amp;D in my free time.</p>
                      </Col>
                  </TimelineItem>
                </Timeline>
              </div>
            </Col>
          </Row>
          <Row className='my-5'>
            <Col>
              <div className="bg-dark text-light p-3 p-sm-5 rounded-4 border-1 border-secondary border shadow-lg">
                <h2 className='text-center'>Skills Earned Along the Way</h2>
                
                <div className="w-25 border-top border-3 mx-auto mb-3 border-secondary rounded-1"></div>
                <p className='text-center mt-4 mb-5'>Here's a snapshot of some of the stuff I've worked with.</p>
                <Container fluid>
                  <Row className="text-center">
                    <Col xs={12} lg={4}>
                      <div className='border border-1 border-secondary rounded-2 py-3 p-2 my-2'>
                        <h6>mxm.dev</h6>
                        <div className="w-25 border-top border-3 mx-auto mb-3 border-secondary rounded-1"></div>
                        <div className="mb-3">
                          { "NextJS,HTML,CSS,JSX,React,React Bootstrap,CSS Modules,Javascript,Strapi CMS,Sass,Hosting with Render and Vercel".split(",").map((skill) => <span key={skill} className='badge bg-opacity-10 bg-white m-1'>{skill}</span>) }
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} lg={4}>
                    <div className='border border-1 border-secondary rounded-2 py-3 p-2 my-2'>
                        <h6>StemmaStudy.com</h6>
                        <div className="w-25 border-top border-3 mx-auto mb-3 border-secondary rounded-1"></div>
                        <div className="mb-3">
                          { "Laravel Framework,PHP,MySQL,HTML,CSS,Bootstrap,Javascript,Cytoscape,Blade,Trix Editor,Stripe,Mailgun,Laravel Vapor + AWS".split(",").map((skill) => <span key={skill} className='badge bg-opacity-10 bg-white m-1'>{skill}</span>) }
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} lg={4}>
                    <div className='border border-1 border-secondary rounded-2 py-3 p-2 my-2'>
                        <h6>brookwoodchurch.org</h6>
                        <div className="w-25 border-top border-3 mx-auto mb-3 border-secondary rounded-1"></div>
                        <div className="mb-3">
                          { "RockRMS, ASP.NET Webforms,C#,HTML,CSS,Bootstrap,Javascript,Workflow Automation,CMS,T-SQL,Entity Framework,Liquid Templating".split(",").map((skill) => <span key={skill} className='badge bg-opacity-10 bg-white m-1'>{skill}</span>) }
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className='mt-4 text-center'>
                    <Col xs={12} lg={{span:8,offset:2}}>
                      <p className="text-start">Here's an eclectic mess of skills and technologies I've used in some fashion in the past &ndash; of sufficient complexity &ndash; that I think warrants inclusion. I might be rusty on some of these.
                        Yet, relearning is <em>much</em> faster than initial learning, so it's probably worth mentioning them.</p>
                        { "JSON,Debugging,SQL,Python 3,Search Engine Optimization,Git and Github,SourceTree,APIs,Data Structures and Algorithms,Word Vectorization,Web Scraper,VR in Unity,Graph Search Techniques,Introductory Machine Learning,Copywriting,Some Persuasion Psychology,Cognitive Science,Drums,Java,C++,CLI's,Google Analytics,Neo4j,iReport (with loathing),".split(",").map((skill) => <span key={skill} className='badge bg-opacity-10 bg-white m-1'>{skill}</span>) }
                    </Col>
                  </Row>

                  <Row className='mt-4'>
                    <Col xs={12} lg={{span:8,offset:2}}>
                    <p>I'm sure I've forgotten to include some other weird things. But, that's ok.</p>
                    <p>Besides, if we're being honest, all of these really boil down to three skills: 
                    the ability to comprehend documentation, the ability to discern when documentation needs to be read, 
                    and, lastly, the ability to endure the painful, writhing agony of actually reading the documentation.</p>
                    </Col>
                  </Row>

                  
                </Container>
                  
              </div>
            </Col>
          </Row>
          <Row className='my-5'>
            <Col>
              <div className="bg-light text-dark p-3 p-sm-5 rounded-4 shadow-lg">
                <h2 className='text-center'>Horizons</h2>
                <div className="w-25 border-top border-3 mx-auto mb-3 border-secondary rounded-1"></div>
                <Row className='mt-4'>
                    <Col xs={12} lg={{span:8,offset:2}}>
                      <p>If all of my time was my own, I would choose to pursue these horizons. These are my most ambitious goals.</p>
                      <p>Considering that the only people capable of honestly and consistently living a self-doubt-free life would rightly be called lunatics, 
                        take the following with an understanding that I <em>know</em> how lofty they are. (In other words, don't think me a lunatic!)</p>

                      

                      <h4>Technologically Empowered Education</h4>
                      <p>The modern idealization of education conceives of it in various linearities: attend an hour lecture, followed by the next lecture, and the next. Listen for large stretches of time as someone unfolds a stream of information and students try to jot down every word.</p>
                      <p>There's a myriad of issues this paradigm is subject to, one of which is the false homogeneity it assumes: every student is treated the same. The lost get more so, and the superstars get bored.</p>
                      <p>I believe it would be better if technology handled the distribution of informative material and the review of it. Then, we could stop treating the information as if it needed to unfold in the same order for everyone. In the real world, there are many paths to come to know the same information. We should let technology systematically find the best pathways for each student. This means we must also delinearize our curricula and make it, like the real world, more interconnected.</p>
                      
                      <h4>Superset Software</h4>
                      <p>Most software problems have already been solved a thousand times over by many businesses. They simply lack the framework for reorganizing the solutions to those problems in different ways or, as well, the rights to use the solutions produced by others.</p>
                      <p>Many types of software services nowadays try to solve some of these perennial problems: Content Management Systems, Database Management Services, Form Builders, etc. I think one of the main problems with most all of them is that they are too opinionated. Any integrations between them are shallow.</p>
                      <p>I'm fascinated by model-driven architectures, and I would love to see that more heavily applied to software itself. Maybe in the form of a "Meta-SaaS" or "Code CMS".</p>

                      <h4>The Foundations of Thought</h4>
                      <p>What is a thought? Can it be fully described in terms of physical brain states? What about truth and logic? Can we really trust "logical" conclusions? Or, should we doubt everything?</p>
                      <p>It should humble any person that there is so much controversy surrounding these most basic questions. I'm inspired by the genius attempts of the past centuries seeking to get at the heart of these questions. I suppose I am still foolish enough to want to give it a try, myself!</p>
                    </Col>
                  </Row>



              </div>
            </Col>
          </Row>
          <h3 className='text-center text-secondary'>Uh... that's all for now.</h3>
        </Container>
      </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'About | Murph'} description={'I am a Software Developer.'}>
      {page}
    </GlobalLayout>
  )
}