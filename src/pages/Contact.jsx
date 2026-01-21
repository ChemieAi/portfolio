import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.section
            className="py-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
        >
            <section className="py-12">
                <h2 className="text-3xl mb-8 font-extrabold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Get in Touch</h2>
                <p className="text-gray-400 mb-6 max-w-xl">
                    Whether you want to collaborate, have a question, or just say hi — feel free to drop a message via any of the platforms below.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <a
                        href="mailto:chemie.valorant@gmail.com"
                        className="bg-[#111] border border-gray-800 p-5 rounded-xl hover:border-purple-500 hover:shadow-[0_0_12px_#a855f7] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <p className="text-gray-400">kzlyburak@gmail.com</p>
                    </a>

                    <a
                        href="https://github.com/ChemieAi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#111] border border-gray-800 p-5 rounded-xl hover:border-purple-500 hover:shadow-[0_0_12px_#a855f7] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                        <p className="text-gray-400">github.com/ChemieAi</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/burak-kızılay/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#111] border border-gray-800 p-5 rounded-xl hover:border-purple-500 hover:shadow-[0_0_12px_#a855f7] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                        <p className="text-gray-400">https://www.linkedin.com/in/burak-kızılay/</p>
                    </a>
                </div>
            </section>
        </motion.section>
    );
};

export default Contact;
