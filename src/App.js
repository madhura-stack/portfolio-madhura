import React, { useState, useEffect } from "react";
import { Mail, Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Software Developer",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;

    const typing = setInterval(() => {
      setTypedText(roles[roleIndex].substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === roles[roleIndex].length) {
        setTimeout(() => {
          charIndex = 0;
          roleIndex = (roleIndex + 1) % roles.length;
        }, 1000);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  const skills = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  const projects = [
    {
      title: "Restaurant Management System",
      category: "Full Stack",
      description:
        "Built a full-stack system to streamline restaurant operations including order management, billing, and menu updates, improving efficiency and reducing manual work.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/madhura-stack/Restaurant-Management-System",
    },
    {
      title: "Hire Helper",
      category: "Full Stack",
      description:
        "Developed a service-based platform connecting users with verified helpers for on-demand tasks with authentication and service management.",
      tech: "React, Express, MongoDB",
      github: "https://github.com/madhura-stack/HireHelper",
    },
    {
      title: "Driver Drowsiness Detection",
      category: "AI",
      description:
        "Created a real-time system to detect driver fatigue using computer vision techniques like eye and yawning detection to enhance road safety.",
      tech: "Python, OpenCV, Mediapipe",
      github: "https://github.com/madhura-stack/Driver_Drowsiness_Detection",
    },
    {
      title: "DeepFake Guard",
      category: "Machine Learning",
      description:
        "Developed a real-time deepfake detection system using machine learning to identify manipulated multimedia content.",
      tech: "Python, ML, OpenCV",
      github: "https://github.com/madhura-stack/Realtime-deepfake_detection",
    },
    {
      title: "Skin Disease Detection",
      category: "Machine Learning",
      description:
        "Built a deep learning model to detect skin diseases from images, assisting in early diagnosis and healthcare accessibility.",
      tech: "Python, ML",
      github: "https://github.com/madhura-stack/Skin_disease_detection",
    },
    {
      title: "AI Book Recommendation",
      category: "AI",
      description:
        "Implemented an AI-based recommendation system to suggest books based on user preferences and behavior.",
      tech: "Python, AI",
      github: "https://github.com/madhura-stack/AI_Book_Recommendation_System",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} px-6 md:px-24`}>

      <nav className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold">Madhura G R.dev</h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <motion.h1 className="text-5xl font-bold">
            Madhura G R
          </motion.h1>

          <p className="text-xl text-blue-500 mt-3">{typedText}</p>

          <p className="mt-3 text-lg opacity-80">
            I build scalable web applications and AI-based solutions that solve real-world problems.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/madhuragr.pdf" target="_blank" className="px-6 py-2 bg-black text-white rounded-full">
              View Resume
            </a>

            <a href="#contact" className="px-6 py-2 border rounded-full">
              Contact me
            </a>
          </div>
        </div>

        <img src="/Madhura.jpg" alt="profile" className="w-60 h-60 rounded-full shadow-lg" />
      </section>

      {/* ABOUT */}
      <section id="about" className="my-14 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I am a Computer Science Engineering student with a strong interest in full stack development and artificial intelligence. I enjoy building real-world applications that solve practical problems using modern technologies. I have experience developing scalable web apps using React, Node.js, and MongoDB, along with AI-based solutions using Python.
        </p>
      </section>

      {/* SKILLS */}
      {/* SKILLS */}
<section id="skills" className="my-14">
  <h2 className="text-3xl font-semibold mb-6">Skills</h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Frontend */}
    <div className="border p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-3 text-lg">Frontend</h3>
      <div className="flex flex-wrap gap-3">
        {skills
          .filter(s => ["React", "HTML", "CSS", "JavaScript"].includes(s.name))
          .map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 border rounded-full">
              <img src={skill.logo} className="w-5 h-5" alt={skill.name} />
              {skill.name}
            </div>
          ))}
      </div>
    </div>

    {/* Backend */}
    <div className="border p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-3 text-lg">Backend</h3>
      <div className="flex flex-wrap gap-3">
        {skills
          .filter(s => ["Node.js", "Express", "MongoDB"].includes(s.name))
          .map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 border rounded-full">
              <img src={skill.logo} className="w-5 h-5" alt={skill.name} />
              {skill.name}
            </div>
          ))}
      </div>
    </div>

    {/* Languages */}
    <div className="border p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-3 text-lg">Languages</h3>
      <div className="flex flex-wrap gap-3">
        {skills
          .filter(s => ["Java", "Python", "JavaScript"].includes(s.name))
          .map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 border rounded-full">
              <img src={skill.logo} className="w-5 h-5" alt={skill.name} />
              {skill.name}
            </div>
          ))}
      </div>
    </div>

    {/* Tools */}
    <div className="border p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-3 text-lg">Tools</h3>
      <div className="flex flex-wrap gap-3">
        {skills
          .filter(s => ["Git"].includes(s.name))
          .map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 border rounded-full">
              <img src={skill.logo} className="w-5 h-5" alt={skill.name} />
              {skill.name}
            </div>
          ))}
      </div>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="my-14">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="flex gap-4 mb-6 flex-wrap">
          {["All", "Full Stack", "Machine Learning", "AI"].map(category => (
            <button key={category} onClick={() => setFilter(category)} className="px-4 py-2 border rounded-full">
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div key={index} whileHover={{ y: -8 }} className="rounded-xl shadow-lg border p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>

              <p className="text-sm mt-2 opacity-70">{project.tech}</p>

              <p className="text-sm mt-2 text-gray-500">
                ⭐ Key Features: Authentication, CRUD Operations, Real-time Processing
              </p>

              <a href={project.github} target="_blank" rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full">
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="my-14">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="flex flex-col gap-2">
          <p>📧 madhuragr@gmail.com</p>
          <div className="flex gap-6">
            <Mail />
            <a href="https://github.com/madhura-stack">GitHub</a>
            <a href="https://www.linkedin.com/in/madhura-g-r-7a0758300">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 opacity-60">
        © {new Date().getFullYear()} Madhura G R
      </footer>

    </div>
  );
}