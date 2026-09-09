import useTheme from './hooks/useTheme'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AILiteracy from './components/AILiteracy'
import Advantages from './components/Advantages'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import EducationCert from './components/EducationCert'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <AILiteracy />
        <Advantages />
        <Skills />
        <Experience />
        <Projects />
        <EducationCert />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
