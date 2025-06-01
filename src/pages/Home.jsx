import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
            className="py-12 flex flex-col items-center text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <section className="py-12 flex flex-col items-center text-center">
                <img
                    src="/Logo.png"
                    alt="Burak"
                    className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700 shadow-md "
                />
                <h1 className="text-4xl font-bold mb-2">Hey, I'm Burak Kızılay 👋</h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
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
                    <div className="flex flex-wrap justify-center gap-2">
                        {["React", "Spring Boot", "Java", "SQL", "Tailwind", "Git", "Firebase"].map((tech, i) => (
                            <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Currently working on:</h3>
                    <p className="text-blue-400">My personal portfolio & advanced CV builder app (NextStep)</p>
                </div>
            </section>
        </motion.section>
    );
};

export default Home;
