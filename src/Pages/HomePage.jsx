import About from "../Components/About/About"
import AppBanner from "../Components/AppBanner/AppBanner"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"
import NavBarComponents from "../Components/Navbar/NavBarComponents"
import Pricing from "../Components/Pricing/Pricing"
import Testimonials from "../Components/Testimonials/Testimonials"

const HomePage = () => {
  return (
    <div>
        <NavBarComponents/>
        <Hero/>
        <About/>
        <Contact/>
        <Pricing/>
        <AppBanner/>
        <Testimonials/>
        <AppBanner/>
        <Footer/>
    </div>
  )
}

export default HomePage