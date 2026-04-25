import React, { useState, useEffect } from "react";
import { Mail, Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

/* ✅ FIX 1: Move roles OUTSIDE */
const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Software Developer",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState("");

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
        "Developed a full-stack restaurant management system to manage orders, billing and menu updates using database integration.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/madhura-stack/Restaurant-Management-System",
    },
    {
      title: "Hire Helper",
      category: "Full Stack",
      description:
        "A service-based application designed to connect users with verified helpers for on-demand tasks.",
      tech: "React, Express, MongoDB",
      github: "https://github.com/madhura-stack/HireHelper",
    },
    {
      title: "Driver Drowsiness Detection",
      category: "AI",
      description:
        "Real-time system to detect driver fatigue using computer vision.",
      tech: "Python, OpenCV, Mediapipe",
      github: "https://github.com/madhura-stack/Driver_Drowsiness_Detection",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} px-6 md:px-24`}>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold">Madhura.dev</h1>

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

          <div className="mt-6 flex gap-4">
            {/* ✅ FIX resume path */}
            <a href="/madhuragr.pdf" download className="px-6 py-2 bg-black text-white rounded-full">
              Resume
            </a>

            <a href="#contact" className="px-6 py-2 border rounded-full">
              Contact
            </a>
          </div>
        </div>

        {/* ✅ FIX image path */}
        <img
          src="/Madhura.jpg"
          alt="profile"
          className="w-60 h-60 rounded-full shadow-lg"
        />
      </section>

      {/* SKILLS */}
      <section id="skills" className="my-14">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 border rounded-full">
              <img src={skill.logo} className="w-5 h-5" alt="" />
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="my-14">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <div key={i} className="border p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2">{p.description}</p>

              <a href={p.github} target="_blank" rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="my-14">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="flex gap-6">
          <Mail />
          <a href="https://github.com/madhura-stack">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </section>

      <footer className="text-center py-10">
        © {new Date().getFullYear()} Madhura
      </footer>

    </div>
  );
}