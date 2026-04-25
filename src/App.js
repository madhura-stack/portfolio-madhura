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
        "Built a full-stack system to streamline restaurant operations including order management, billing, and menu updates.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/madhura-stack/Restaurant-Management-System",
    },
    {
      title: "Hire Helper",
      category: "Full Stack",
      description:
        "Developed a service platform connecting users with verified helpers using authentication and service management.",
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
    {
      title: "DeepFake Guard",
      category: "Machine Learning",
      description:
        "Real-time deepfake detection system using machine learning.",
      tech: "Python, ML, OpenCV",
      github: "https://github.com/madhura-stack/Realtime-deepfake_detection",
    },
    {
      title: "Skin Disease Detection",
      category: "Machine Learning",
      description:
        "Deep learning model to detect skin diseases from images.",
      tech: "Python, ML",
      github: "https://github.com/madhura-stack/Skin_disease_detection",
    },
    {
      title: "AI Book Recommendation",
      category: "AI",
      description:
        "AI-based system to recommend books based on user interest.",
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

      {/* NAVBAR */}
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
            Full Stack Developer building scalable web apps and AI-powered solutions that solve real-world problems.
          </p>

          <p className="mt-2 text-green-600 font-medium">
            🚀 Open to internships and full-time opportunities
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/madhuragr.pdf" target="_blank" rel="noreferrer" className="px-6 py-2 bg-black text-white rounded-full">
              View Resume
            </a>

            <a href="#contact" className="px-6 py-2 border rounded-full">
              Contact me
            </a>
          </div>
        </div>

        <img src="/Madhura.jpg" alt="profile" className="w-60 h-60 rounded-full shadow-lg" />
      </section>

      {/* PROOF SECTION */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center my-14">
        <div>
          <h2 className="text-3xl font-bold">6+</h2>
          <p className="opacity-70">Projects</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">3+</h2>
          <p className="opacity-70">AI Projects</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">MERN</h2>
          <p className="opacity-70">Stack</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">100%</h2>
          <p className="opacity-70">Hands-on</p>
        </div>
      </section>

      {/* KEEP REST SAME */}