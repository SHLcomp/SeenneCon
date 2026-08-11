import Hero from "../componenets/hero/Hero"
import Services from "../componenets/homeServices/Services"
import Industries from "../componenets/industries/Industries"
import Navbar from "../componenets/navbar/Navbar"
import Cta from "../componenets/Quotecta/Cta"
import Process from "../componenets/simpleProcess/Process"
import Testimonials from "../componenets/testimonials/Testimonials"
import Why from "../componenets/whyUs/Why"
import Footer from "../componenets/footer/Footer.jsx"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Why />
      <Industries />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home