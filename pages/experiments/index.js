import GlobalLayout from '../../components/layout/GlobalLayout.js'
import Image from 'next/image'
import HomeHeader from '../../components/header/HomeHeader.js'

import bg from '../../public/images/background/gold-white-smoke.png'



export default function Experiments() {
  return (
      <div> {/* style={{background: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'top'}} */}
        <div className="container text-light">
          <h1 className='text-center mt-5'>
          Experiments. TODO Meta ...
          </h1>
        </div>

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