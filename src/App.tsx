import { FAQ } from "./components/FAQ"
import { Features } from "./components/Features"
import { FinalCTA } from "./components/FinalCTA"
import { Footer } from "./components/Footer"
import { Guarantee } from "./components/Guarantee"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { Intelligence } from "./components/Intelligence"
import { Problem } from "./components/Problem"
import { SocialProof } from "./components/SocialProof"
import { Testimonials } from "./components/Testimonials"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <Intelligence />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
