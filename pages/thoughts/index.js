import GlobalLayout from '../../components/layout/GlobalLayout.js'
import Image from 'next/image'
import HomeHeader from '../../components/header/HomeHeader.js'

import { fetchAPI } from '../../lib/api.js'

import bg from '../../public/images/background/gold-white-smoke.png'

import { getStrapiMedia } from '../../lib/media.js'
import MXMListItem from '../../components/MXMListItem.js'

export default function Thoughts({articles}) {
  let listArticles = [];

  if(articles && articles.length > 0){
    listArticles = articles.map((article)=>
      <MXMListItem href={`/thoughts/${article.attributes.slug}`} key={article.id} title={article.attributes.title} imageUrl={getStrapiMedia(article.attributes.image)} description={article.attributes.description}></MXMListItem>
    );
  }

  return (
      <div>
        <div className="container text-light">
          <h1 className='text-center mt-5'>
            Thoughts.
          </h1>
          <p className='text-center mb-5'>This is what sometimes comes out of my brain.</p>
          {listArticles}
        </div>

      </div>
  )
}

Thoughts.getLayout = function getLayout(page) {
  return (
    <GlobalLayout title={'Thoughts | Murph'} description={'The best website ever.'}>
      {page}
    </GlobalLayout>
  )
}

export async function getServerSideProps(context){
  const articlesResponse = await fetchAPI('/articles', {populate: ['image', 'category'], sort:['publishedAt:desc','slug']});
  return {
    props: {
      articles: articlesResponse.data
    }
  }
}