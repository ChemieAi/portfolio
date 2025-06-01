const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800 mt-12">
      <p>© {new Date().getFullYear()} Burak Kızılay. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://github.com/ChemieAi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/burak-kızılay/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
