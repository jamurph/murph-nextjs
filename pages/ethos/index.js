/* eslint-disable react/no-unescaped-entities */
import GlobalLayout from '../../components/layout/GlobalLayout.js'
import Image from 'next/image'

import ship from '../../public/images/articles/godspeed-ship.jpg'

import { Container, Row, Col } from 'react-bootstrap'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown.js'

export default function About() {
  return (
    <div>


      <Container className="my-5">
        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div className={`article bg-light text-dark p-3 p-sm-5 rounded-4 shadow-lg`}>
              <h2 className="text-center">My Ethos: MXM</h2>
              <p className="text-center text-muted">Embark. Explore. Empower.</p>
              <div className="w-25 border-top border-3 mx-auto mb-5 border-secondary rounded-1"></div>
              <div className="shadow-lg mb-5 rounded-3 overflow-hidden">
                <Image className='rounded-3' src={ship} layout="responsive" width={1920} height={1080} alt="" />
              </div>
              <ReactMarkdown>
                {`
What guiding principles, or ethos, do you want to live by?

This is a daunting question, and it is not a question that anyone can truly ignore: try it, and you will find yourself living by an ethos of apathy.

## The Need for an Ethos

Life is chaos. It throws at you a continuous stream of conflicting information, choices, possibilities, and passions. It's messy. It's hard to choose what should be acted upon. Yet, life is action. We cannot choose not to make a choice (that would be a contradiction).

Everyone will act according to an ethos, whether they can put it into words or not. However, those that work to develop an understanding of their ethos will be better equipped to act consistently according to it, rather than being blown about by every wind of passion.

I am reminded of a famous quote by Carl Jung:

> *Until you make the unconscious conscious, it will direct your life and you will call it fate.*
>
> &ndash; **Carl Jung**

To this end, I have endeavored to develop my own ethos: "Embark. Explore. Empower." aka MXM.

## Embark

The essence of "Embark" is captured by the old proverb: Nothing ventured, nothing gained. It is about having a willingness to move and to take risks.

All choice is risk-laden. Inaction is a choice with risks of its own: if you remain in port, you will continue to use resources that could have been used at sea.

Choosing to deliberate about possible courses of action can be a good thing, but you cannot remain in endless preparation – aka "analysis paralysis".

You will never be able to plan for every contingency. You cannot ensure logical certitude of completing the first-order aims of any worthy expedition. Instead, you must take whatever precautions you can, gather your provisions, then set your mind on higher-order, transcendent aims and set sail.

## Explore

When one embarks, there is always some destination in mind. If this is the sole goal of the endeavor, then the success or failure of the entire expedition rides on whether the specific destination is reached. Wrong turns are catastrophic. If, on the other hand, your primary goal is to map out the territory – to discover new lands or trade routes – then the only wrong turns are those aiming at what is already known.

The essence of "Explore" is to seek first and foremost the acquisition of knowledge and growth. It is the transcendent aim of every voyage, even if you're blown off course or have to stop along the way. You may have expectations or hopes about where your current heading might take you, but you must maintain the ability to be wrong and to keep choosing alternative headings.

> *To update their mental models, our brain areas must exchange error messages. Error is therefore the very condition of learning. Let us not punish errors, but correct them quickly, by giving ... detailed but stress-free feedback.*
>
> &ndash; **Stanislas Dehaene in _How We Learn_**

Making our primary aim exploration removes the sting of error. To err is to learn. There is never an unsuccessful result of exploration.

## Empower

Even with the certitude of success, every expedition remains an arduous task. It cannot be taken without the expenditure of energy, and, possibly, at the cost of some personal suffering.

> *Life is never made unbearable by circumstances, but only by lack of meaning and purpose.*
>
> &ndash; **Victor Frankl**

Expeditions need to be worthwhile. They need purpose.

The essence of "Empower" is to give purpose to "Embark" and "Explore". The goal of embarking and exploring is to empower further expeditions by yourself or others. It is, in a sense, a recursive step.

We may take expeditions to discover new tools for exploration, to discover (or create) new worlds to explore, or to bring others to explore those new worlds with us. We take these expeditions in the pursuit of meaning. Our course is set by the compass of conscious interest and the alignment of ourselves with the beauty in the stars.

The most wondrous thing about the pursuit of meaning is that it is an endless pursuit. The meaning is in the pursuit. It is an unpredictable fractal spiral of a journey, ever branching onward and outward in new and varied directions.

## MXM

The MXM ethos is meant to inspire more arduous action without the anxiety.

It calls us to move in uncertainty, to tolerate and accept error, and to seek new and energizing endeavors.
                            `}
              </ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'The MXM Ethos'} description={'Embark. Explore. Empower. Inspire more arduous action without anxiety.'}>
      {page}
    </GlobalLayout>
  )
}