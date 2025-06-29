import { motion } from 'framer-motion';

const projects = [
    {
        title: "NextStepCV",
        description: "Adım adım CV oluşturmanı sağlayan modern, sade ve özelleştirilebilir bir uygulama.",
        technologies: ["React", "Tailwind", "Vite", "Express", "Firebase"],
        github: "https://github.com/ChemieAi/NextStep",
    },
    {
        title: "ValoPros",
        description: "VALORANT oyuncu-takım bilgi sitesi. Üniversite projesi olarak geliştirildi.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ChemieAi/ValoPros",
    },
    {
        title: "Coffee Order App",
        description: "Kahve siparişi verebileceğin bir Android uygulaması.",
        technologies: ["Java", "Kotlin", "Android Studio", "Firebase"],
        github: "https://github.com/ChemieAi/coffeeorderappone",
    },
    {
        title: "BookLibApp",
        description: "Kişisel kitap arşivini yöneten bir uygulama.",
        technologies: ["JavaScript", "Kotlin", "Android Studio", "Firebase"],
        github: "https://github.com/ChemieAi/booklibapp",
    },
    {
        title: "Text Editor",
        description: "Java Swing ile yapılmış basit metin düzenleyici.",
        technologies: ["Java"],
        github: "https://github.com/ChemieAi/texr-editor-new",
    },
    {
        title: "Image Classifier",
        description: "Python ile basit görsel sınıflandırıcı web app.",
        technologies: ["Python", "Flask", "HTML"],
        github: "https://github.com/ChemieAi/imageClassifactionwebapp",
    },
    {
        title: "Fatura.io",
        description: "Fatura yönetimi ve takip sisteminin temel özelliklerini içeren pratik bir uygulama.",
        technologies: ["React", "Vite", "Tailwind", "Firebase"],
        github: "https://github.com/ChemieAi/fatura-io",
    },
    {
        title: "Tip Calculator App",
        description: "Basit ve kullanıcı dostu arayüzüyle hesap bölme ve bahşiş hesaplama uygulaması.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ChemieAi/tip-calculator-app",
    },
    {
        title: "OneLink",
        description: "Tüm sosyal medya ve bağlantılarını tek bir sayfada paylaşmanı sağlayan sade ve responsive bir uygulama.",
        technologies: ["React", "Tailwind", "Vite", "Typescript", "Express", "MongoDB"],
        github: "https://github.com/ChemieAi/one-link",
    },
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
