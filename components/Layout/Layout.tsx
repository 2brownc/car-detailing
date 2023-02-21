import { navBarLinks } from '../../data/navLinks';
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
        pb-5
        grow
        bg-gradient-to-br
        from-[#ffe19a] via-[#fff8e7] to-[#fff0ea]
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
