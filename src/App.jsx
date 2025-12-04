import Navbar from "./components/Navbar.jsx"
import About from "./pages/About/About.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Home from "./pages/Home/Home.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <About/>
    <Contact/>
    <Analytics />
    </>
  )
}

export default App
