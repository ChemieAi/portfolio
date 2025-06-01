import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Yapı Kredi Teknoloji",
        role: "Software Engineering Intern",
        date: "Feb 2024 – Jan 2025",
        description: "- Contributing to application/software development processes.\n- Using React.js, Java Spring Boot, and SQL as a full-stack developer.",
    },
    {
        company: "Bosch San. ve Tic. A.Ş.",
        role: "Software Engineering Intern",
        date: "Jul 2023 – Aug 2023",
        description: "- Data analysis and visualization.\n- Tools used: Python, Matplotlib, Plotly, D3.js.",
    },
    {
        company: "Ovidax Yazılım",
        role: "Software Engineering Part Timer",
        date: "Feb 2021 – Apr 2021",
        description: "- Web design and development.\n- Corporate identity support.\n- Tools: Adobe Photoshop, Illustrator, React.js, and .NET.",
    },
];

const Experience = () => {
    return (
        <motion.section
            className="py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <section className="py-8">
                <h2 className="text-3xl font-bold mb-8">Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-[#111] p-5 rounded-xl border border-gray-800
             hover:border-blue-500 transform transition duration-300
             hover:-translate-y-1 hover:scale-[1.02]">
                            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                            <p className="text-gray-500 text-sm mb-2">{exp.date}</p>
                            {exp.description.split('\n').map((line, i) => (
                                <p key={i} className="text-gray-400">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </motion.section>
    );
};

export default Experience;
