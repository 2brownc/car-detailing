import type { NextPage } from 'next'
import Head from 'next/head'

import { navBarLinks } from '../data/navLinks';
import { slidesData } from '../data/slides';
import { cardsData } from '../data/cards';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import Carousel from '../components/Carousel/Carousel';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';


function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>PK DETAILING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="
        flex
      ">

        <div className="
          flex-none
        ">
          <NavBarTop navLinks={navBarLinks.navLinks} />
        </div>

        <div className="
          grow
        ">
          {children}
        </div>

        <div className="
          flex-none
        ">
          <Footer />
        </div>

      </div>
    </>
  )
}

export default Layout;
