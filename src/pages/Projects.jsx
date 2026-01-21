import { motion } from 'framer-motion';

const projects = [
    {
        title: "CV Eksperi",
        description: "Automatically analyze your CV and assess its suitability for ATS systems. CV Eksperi offers tools that will help you stand out in job applications. (Not available on Github, but you can access the site by clicking on \"View on Github\") OPEN TO INVESTMENT!",
        technologies: ["React", "Tailwind", "Vite", "Express", "Firebase", "Python", "Flask", "AI"],
        github: "https://cveksperi.com",
    },
    {
        title: "NextStepCV",
        description: "A modern, simple, and customizable web application that lets you create your CV step-by-step. OPEN TO INVEST!",
        technologies: ["React", "Tailwind", "Vite", "Express", "Firebase"],
        github: "https://github.com/ChemieAi/NextStep",
    },
    {
        title: "ValoPros",
        description: "A web application where you can view VALORANT player-team information.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ChemieAi/ValoPros",
    },
    {
        title: "Coffee Order App",
        description: "A mobile application where you can place coffee orders.",
        technologies: ["Java", "Kotlin", "Android Studio", "Firebase"],
        github: "https://github.com/ChemieAi/coffeeorderappone",
    },
    {
        title: "BookLibApp",
        description: "A mobile application that manages your personal book archive.",
        technologies: ["JavaScript", "Kotlin", "Android Studio", "Firebase"],
        github: "https://github.com/ChemieAi/booklibapp",
    },
    {
        title: "Text Editor",
        description: "A simple text editor desktop application made with Java Swing (similar to NotePad).",
        technologies: ["Java"],
        github: "https://github.com/ChemieAi/texr-editor-new",
    },
    {
        title: "Image Classifier",
        description: "A simple image classification web application made with Python.",
        technologies: ["Python", "Flask", "HTML"],
        github: "https://github.com/ChemieAi/imageClassifactionwebapp",
    },
    {
        title: "Fatura.io",
        description: "A practical web application that includes the basic features of an invoice management and tracking system.",
        technologies: ["React", "Vite", "Tailwind", "Firebase"],
        github: "https://github.com/ChemieAi/fatura-io",
    },
    {
        title: "Tip Calculator App",
        description: "A simple and user-friendly web application for bill splitting and tip calculation.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ChemieAi/tip-calculator-app",
    },
    {
        title: "OneLink",
        description: "A simple and responsive web application that allows you to share all your social media and links on a single page.",
        technologies: ["React", "Tailwind", "Vite", "Typescript", "Express", "MongoDB"],
        github: "https://github.com/ChemieAi/one-link",
    },
    {
        title: "Thrifty",
        description: "A minimalist budget management mobile application for expense tracking.",
        technologies: ["Flutter", "Dart", "Provider", "Material UI", "Firebase"],
        github: "https://github.com/ChemieAi/thrifty",
    }

];

const Projects = () => {
    return (
        <motion.section
            className="py-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
        >
            <section className="py-8">
                <h2 className="text-3xl mb-8 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Projects</h2>
                <h3 className="text-xl mb-6 font-extrabold text-gray-200">Here are some of the projects I've worked on. Scroll down and feel free to click "View on GitHub" links to explore them!</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#111] border border-gray-800 p-5 rounded-xl hover:border-purple-500 hover:shadow-[0_0_12px_#a855f7] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 text-sm mb-3">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </motion.section>
    );
};

export default Projects;
