import type { NextPage } from 'next'
import Head from 'next/head'

import { navBarLinks } from '../data/navLinks';
import { slidesData } from '../data/slides';
import { cardsData } from '../data/cards';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import Carousel from '../components/Carousel/Carousel';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PK DETAILING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <NavBarTop navLinks={navBarLinks.navLinks} />
      </div>

      <div>
        <Carousel slidesData={slidesData} />
      </div>

      <div className="
        text-center
        tracking-wider
        font-['Passion_One']
        font-bold
        text-5xl
        mt-8
      ">
        PK DETAILING
      </div>
      <div className="
        font-sans
        text-2xl
        text-center
        font-light
        mt-3 mb-4
      ">
        We provide a broad range of services. Check them out!
      </div>

      <div className="py-4 px-2">
        <Cards cardsData={cardsData} />
      </div>


      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home
