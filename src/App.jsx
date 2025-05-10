import  AboutUs  from "./Components/AboutUs.jsx"
import { ContactUs } from "./Components/ContactUs.jsx"
import { Facilities } from "./Components/Facilities.jsx"
import { Faq } from "./Components/Faq.jsx"
import { Home } from "./Components/Home.jsx"
import Marquee from "./Components/Marquee.jsx"
import { Memberships } from "./Components/Memberships.jsx"
import { Navbar } from "./Components/Navbar.jsx"
import { Quotes } from "./Components/Quotes.jsx"
import Services from "./Components/Services.jsx"
import { Trainers } from "./Components/Trainers.jsx"



function App() {


  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="marquee">
          <Marquee />
        </section>
        <section id="Service">
          <Services />
        </section>
        <section id="qutoes">
          <Quotes />
        </section>
        <section id="trainers">
          <Trainers />
        </section>
        <section id="membership">
          <Memberships />
        </section>
        <section id="facilities">
          <Facilities />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>


    </>
  )
}

export default App
