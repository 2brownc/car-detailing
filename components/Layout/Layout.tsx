import type { NextPage } from 'next'

import { navBarLinks } from '../../data/navLinks';
import { slidesData } from '../../data/slides';
import { cardsData } from '../../data/cards';
import NavBarTop from '../NavBarTop/NavBarTop';
import Footer from '../Footer/Footer';


function Layout({ children }: any) {
  return (
      <div className="
        h-screen
        flex flex-col
      ">

        <div className="
          grow-0
        ">
          <NavBarTop navLinks={navBarLinks.navLinks} />
        </div>

        <div className="
          grow
        ">
          {children}
        </div>

        <div className="
          grow-0
        ">
          <Footer />
        </div>

      </div>
  )
}

export default Layout;
