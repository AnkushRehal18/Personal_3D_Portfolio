import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <main className='bg-slate-300/20'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
