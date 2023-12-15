import GlobalLayout from '../../components/layout/GlobalLayout.js'

import { Container, Row, Col } from 'react-bootstrap'
import MXMListItem from '../../components/MXMListItem.js'

import network from '../../public/images/articles/network-vis.png'
import fractal from '../../public/images/articles/fractal_tree.jpg'
import tsum from '../../public/images/articles/text_summarization.jpg'

export default function Experiments() {
  return (
      <div> 
        <Container className="text-light">
          <h1 className='text-center mt-5'>
            Experiments.
          </h1>
          <p className='text-center mb-5'>Sometimes half-baked. Sometimes half-developed. Always delicious.</p>

          <MXMListItem href={`/experiments/graph`} key='graph-ui' title='Rethink Administration: Graph-based User Interface' imageUrl={network} description='Graphs are more natural than ledgers and even hierarchies. They might even make for good administration webpages.'></MXMListItem>
          <MXMListItem href={`/experiments/fractal`} key='fractal' title='Fractal Generator' imageUrl={fractal} description='Fractals are a fun and useful concept to understand. This janky experiment shows one method for creating them.'></MXMListItem>
          <MXMListItem href={`/experiments/summarize`} key='summarize' title='Text Summarizer' imageUrl={tsum} description='It summarizes text. nuff said.'></MXMListItem>
          
          
          {/* QnA consequences -> arguments that God exists or that we are more than bodies */}
          {/* image text scan in JS (client side!) */}
          {/* text summarizer */}
          {/* sentiment analysis? */}
        </Container>

      </div>
  )
}

Experiments.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'Web Experiments | Murph'} description={'The best website ever.'}>
      {page}
    </GlobalLayout>
  )
}