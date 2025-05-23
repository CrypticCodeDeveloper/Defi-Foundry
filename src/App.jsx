import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Ecosystem from "./components/ecosystem.jsx";
import WhySection from "./components/Why-section.jsx";
import Testimonials from "./components/Testimonials.jsx";
import MainCTA from "./components/main-CTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        {/*<Ecosystem />*/}
        <WhySection />
        <Testimonials />
        <MainCTA />
        <Footer />
    </div>
  )
}

export default App
