import BannerSection from "./Layout/BannerSection"
import CategoriesSection from "./Layout/CategoriesSection"
import FeaturedProducts from "./Layout/FeaturedProducts"
import FeatureSection from "./Layout/FeatureSection"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import HeroSection from "./Layout/HeroSection"
import Newsletter from "./Layout/Newsletter"
import Testimonials from "./Layout/Testimonials"
import TopBar from "./Layout/TopBar"

function Home() {
 
    return (
        <>
        <TopBar/>
        <Header/>
       <HeroSection/>
       <FeatureSection/>
       <CategoriesSection/>
       <FeaturedProducts/>
       <BannerSection/>
       <Testimonials/>
       <Newsletter/>
        <Footer/>
        </>
    
    )
  }
  
  export default Home