import type { NextPage } from 'next'

import { navBarLinks } from '../../data/navLinks';
import { slidesData } from '../../data/slides';
import { cardsData } from '../../data/cards';
import NavBarTop from '../NavBarTop/NavBarTop';
import Footer from '../Footer/Footer';


function Layout({ children }: any) {
  return (
    <div className="
        flex flex-col
        h-screen
    ">

      <div className="
      ">
        <NavBarTop navLinks={navBarLinks.navLinks} />
      </div>

      <div className="
        grow
      ">
        {children}
      </div>

      <div className="
      ">
        <Footer />
      </div>

    </div>
  )
}

export default Layout;
