import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // iconlar için
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-extrabold tracking-wide mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]">burak.engineer</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link
            to="/"
            className="bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className="bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]"
          >
            Experience
          </Link>
          <a
            href="/BURAK_KIZILAY_CV_ENGLISH_02-07-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]"
          >
            Resume
          </a>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black px-6 py-4 absolute top-16 right-4 w-52 rounded-xl shadow-lg flex flex-col gap-4 text-sm z-50"

          >

            <Link to="/" className="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-400 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/projects" className="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-400 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/experience" className="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-400 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]" onClick={() => setIsOpen(false)}>Experience</Link>
            <a
              href="/BURAK_KIZILAY_CV_ENGLISH_02-07-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-400 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]"
            >
              Resume
            </a>
            <Link to="/contact" className="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-400 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]" onClick={() => setIsOpen(false)}>Contact</Link>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
