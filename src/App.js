import React, { useState, useEffect } from "react";
import { Mail, Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState("");

  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Software Developer"
  ];

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

    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },

    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },

    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },

    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },

    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },

    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },

    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },

    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },

    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },

    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }

  ];



  const projects = [

    {
      title: "Restaurant Management System",
      category: "Full Stack",
      description:
        "Developed a full-stack restaurant management system to manage orders, billing and menu updates using database integration.",
      tech: "React, Node.js, MongoDB",
      github:
        "https://github.com/madhura-stack/Restaurant-Management-System",
      demo: ""
    },

    {
      title: "Hire Helper",
      category: "Full Stack",
      description:
        "A service-based application designed to connect users with verified helpers for on-demand tasks.",
      tech: "React, Express, MongoDB",
      github:
      "https://github.com/madhura-stack/HireHelper",
            
      demo: ""
    },

    {
      title: "Driver drowsiness detection",
      category: "AI",
      description:
        " Built a real-time computer-vision model to detect driver fatigueusing closed-eye and yawning-mouth classification using mediapipe. .",
      tech: "Python, Scikit-learn,Mediapipe, Opencv",
      github:
        "https://github.com/madhura-stack/Driver_Drowsiness_Detection",
      demo: ""
    },
    {
      title: "DeepFake Guard ",
      category: "Deep Learning",
      description:
        " Real-Time Multimedia Manipulation Detector.",
      tech: "Python, Scikit-learn, ML model, Opencv",
      github:
        "https://github.com/madhura-stack/Realtime-deepfake_detection",
      demo: ""
    },
    {
      title: "Skin_disease_detection",
      category: "Machine Learning",
      description:
        " Detection of Skin disease using Deep learning model",
      tech: "Python, Scikit-learn, ML model",
      github:
        "https://github.com/madhura-stack/Skin_disease_detection",
      demo: ""
    },
    {
      title: "AI_Book_Recommendation_System",
      category: "AI",
      description:
        " Recommended Books using AI",
      tech: "Python,AI agent",
      github:
        "https://github.com/madhura-stack/AI_Book_Recommendation_System",
      demo: ""
    },



  ];


  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(project =>
          project.category === filter
        );


  return (

    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      } px-6 md:px-24`}
    >

{/* NAVBAR */}

<nav className="flex justify-between items-center py-6">

<h1 className="text-2xl font-bold">
Madhura G R.dev
</h1>

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

<button
className="md:hidden"
onClick={() => setMenuOpen(!menuOpen)}
>

{menuOpen ? <X /> : <Menu />}

</button>

</div>

</nav>



{/* HERO */}

<section className="flex flex-col md:flex-row items-center justify-between gap-10">

<div>

<motion.h1
className="text-5xl md:text-6xl font-bold"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
>

Madhura G R

</motion.h1>


<p className="text-xl text-blue-500 mt-3">

{typedText}

</p>


<div className="mt-6 flex gap-4">

<a
href="madhuragr.pdf"
download
className="px-6 py-2 rounded-full bg-black text-white text-white hover:scale-105 transition"
>

Download Resume

</a>


<a
href="#contact"
className="px-6 py-2 rounded-full border"
>
Contact me
</a>

</div>

</div>


<motion.img
src="\Madhura.jpg"
className="w-60 h-60 rounded-full shadow-lg"
alt="profile"
/>

</section>



{/* ABOUT */}

<section id="about" className="my-14 max-w-3xl">

<h2 className="text-3xl font-semibold mb-4">

About Me

</h2>

<p>

I am a Computer Science Engineering student passionate about
building scalable full-stack applications and integrating AI
into real-world solutions.

</p>

</section>



{/* SKILLS */}

<section id="skills" className="my-14">

<h2 className="text-3xl font-semibold mb-6">

Skills

</h2>


<div className="flex flex-wrap gap-4">

{skills.map((skill, index) => (

<motion.div
key={index}
whileHover={{ scale: 1.1 }}
className="flex items-center gap-2 px-5 py-2 rounded-full border shadow"
>

<img
src={skill.logo}
className="w-5 h-5"
alt={skill.name}
/>

{skill.name}

</motion.div>

))}

</div>

</section>



{/* PROJECTS */}

<section id="projects" className="my-14">

<h2 className="text-3xl font-semibold mb-6">

Projects

</h2>


<div className="flex gap-4 mb-6">

{["All", "Full Stack", "Machine Learning"].map(category => (

<button
key={category}
onClick={() => setFilter(category)}
className="px-4 py-2 border rounded-full"
>

{category}

</button>

))}

</div>


<div className="grid md:grid-cols-3 gap-6">

{filteredProjects.map((project, index) => (

<motion.div
key={index}
whileHover={{ y: -8 }}
className="rounded-xl shadow-lg border p-6"
>

<h3 className="text-xl font-semibold">

{project.title}

</h3>

<p className="mt-2">

{project.description}

</p>

<p className="text-sm mt-2">

{project.tech}

</p>


<div className="flex gap-3 mt-4">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 bg-black text-white rounded-full"
>

GitHub

</a>

</div>

</motion.div>

))}

</div>

</section>



{/* GITHUB ACTIVITY */}

<section className="my-14">

<h2 className="text-3xl font-semibold mb-6">

GitHub Activity

</h2>


<img
src="https://ghchart.rshah.org/madhura-stack"
alt="github chart"
/>

</section>



{/* CONTACT */}

<section id="contact" className="my-14">

<h2 className="text-3xl font-semibold mb-6">

Contact

</h2>


<div className="flex gap-6">

<Mail />

<a href="https://github.com/madhura-stack">

GitHub

</a>

<a href="https://www.linkedin.com/in/madhura-g-r-7a0758300">

LinkedIn

</a>

</div>

</section>



<footer className="text-center py-10 opacity-60">

© {new Date().getFullYear()} Madhura G R

</footer>


</div>

);

}
<div className="bg-green-500 text-white p-4">
  Tailwind working
</div>