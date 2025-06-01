import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 md:px-20 lg:px-32 pt-28">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
