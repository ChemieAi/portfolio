import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
            className="py-12 flex flex-col items-center text-center md:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <section className="py-12 flex flex-col items-center text-center">
                <img
                    src="/DISCORD_SERVER_ICON_SLOW (256).gif"
                    alt="Burak"
                    className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700 shadow-md "
                />
                <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]">
                    Hey, I'm Burak Kızılay<a className="text-white">👋</a>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                    I'm a Computer Engineer with hands-on experience in React, Java, Spring Boot, Oracle, and MSSQL.
                    I actively use Agile methodologies and tools like JIRA in my development process, and I enjoy building robust full-stack applications.
                    My strengths include analytical thinking, strong communication, and a passion for teamwork and continuous learning.
                </p>
                <p className="text-gray-500 mt-4 max-w-xl">
                    Beyond engineering, I'm active in tech communities and esports organizations such as IEEE, FUT Esports, and Red Bull.
                    I'm also passionate about game development, community building, and creative design.
                </p>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-2 ">
                        {["React.js","Next.js", "Node.js", "Spring Boot", "Java", "SQL", "Tailwind","BootStrap", "Git", "Firebase"].map((tech, i) => (
                            <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm hover:text-white transition duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-[0_0_4px_#a855f7]">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Currently working on:</h3>
                    <p className="text-blue-400">My personal portfolio & advanced CV builder app <a href='https://www.nextstepcv.tech' rel="noopener noreferrer" target="_blank">(NextStepCV 👆🏻)</a></p>
                </div>
            </section>
        </motion.section>
    );
};

export default Home;
