import React from 'react';
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { Code2, Rocket, Award, Users, Laptop } from 'lucide-react';

// -- SKILLS SECTION DATA (Flat array for single grid) --
export const skillsData = [
  { name: "React", icon: <FaReact size={40} className="text-[#61DAFB]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#E34F26]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-[#339933]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Express", icon: <SiExpress size={40} className="text-slate-800" />, bg: "bg-white", border: "border-slate-200" },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-[#47A248]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Java", icon: <FaJava size={40} className="text-[#007396]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "JavaScript", icon: <IoLogoJavascript size={40} className="text-[#F7DF1E]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Postman", icon: <SiPostman size={40} className="text-[#FF6C37]" />, bg: "bg-white", border: "border-slate-200" }
];

// -- PROJECTS SECTION DATA --
export const projectsData = [
  {
    title: "CAMPX",
    category: "Full Stack MERN",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description: "A centralized academic communication platform for announcements, opportunities, events, notifications, and student engagement.",
    features: [
      "Role-based Authentication",
      "Student & Faculty Dashboards",
      "Announcements & Opportunity posts",
      "Real-time Event updates"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "https://mycampx.vercel.app/"
  },
  {
    title: "Car Rental Platform",
    category: "Full Stack Booking",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description: "A full-stack vehicle booking platform with user authentication, booking management, and responsive design.",
    features: [
      "Secure User Authentication",
      "Interactive Car Selection",
      "Vehicle Management Interface",
      "Responsive Design"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "https://urbancruise-1.onrender.com/"
  },
  {
    title: "Student Monitoring System",
    category: "Database App",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    description: "Database-driven academic monitoring application for tracking student performance and generating reports.",
    features: [
      "Student Academic Records",
      "Faculty Management Panel",
      "Performance Tracking",
      "Report Generation Tools"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "#"
  }
];

// -- EXPERIENCE SECTION DATA --
export const experienceData = [
  {
    role: "Full Stack Development Trainee",
    company: "Technical Hub",
    duration: "Nov 2024 – May 2025",
    responsibilities: [
      "Developed web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built responsive user interfaces and integrated backend APIs.",
      "Worked in collaborative project environments following software development practices."
    ]
  },
  {
    role: "Student Software Developer",
    company: "Aditya Polytechnic",
    duration: "Aug 2023 – Jan 2024",
    responsibilities: [
      "Developed a Student Academic Monitoring System used for tracking academic performance.",
      "Designed database schema and implemented CRUD operations.",
      "Collaborated with faculty members to gather requirements and improve usability."
    ]
  }
];

// -- EDUCATION SECTION DATA --
export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    institution: "Aditya University",
    duration: "2025 – 2028",
    score: "CGPA: 7.6"
  },
  {
    degree: "Diploma in Computer Science",
    major: "Computer Science & Engineering",
    institution: "Aditya College of Engineering",
    duration: "2022 – 2025",
    score: "CGPA: 9.1"
  },
  {
    degree: "Secondary School Certificate",
    major: "General Education",
    institution: "B.V.M High School",
    duration: "2022",
    score: "Percentage: 83.4%"
  }
];

// -- ACHIEVEMENTS SECTION DATA --
export const achievementsData = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "300+ DSA Problems",
    description: "Solved across multiple coding platforms, mastering algorithms and data structures."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Full Stack Projects",
    description: "Successfully built and deployed MERN stack applications like CAMPX and Car Rental."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "State-Level Tech Fest",
    description: "Project recognized and selected for presentation at a major state-level technical symposium."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "GDG Participant",
    description: "Active participant in Google Developer Groups, engaging with the developer community."
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Hackathons",
    description: "Regularly participate in coding competitions to hone problem-solving skills under pressure."
  }
];

// -- CONTACT SECTION DATA --
export const contactData = {
  heading: "Let's Build Something Great",
  availableFor: [
    "Internships",
    "Software Development Roles",
    "Freelance Projects",
    "Collaboration Opportunities"
  ]
};

// -- HERO SECTION DATA --
export const heroData = {
  headline: "Software Developer & MERN Stack Engineer",
  subHeadline: "Building scalable web applications, solving real-world problems, and transforming ideas into impactful digital products.",
  stats: [
    { value: "300+", label: "DSA Problems Solved" },
    { value: "3+", label: "Major Projects" },
    { value: "2+", label: "Years Building Software" },
    { value: "GDG", label: "Community Participant" }
  ]
};

// -- ABOUT SECTION DATA --
export const aboutData = {
  description1: "I am a dedicated software developer specializing in the MERN stack. Over the years, I've honed my skills in building robust applications, taking them from simple ideas to deployed, production-ready platforms.",
  description2: "I actively engage with developer communities, continuously practice problem-solving through DSA, and constantly explore new technologies to build better, faster, and more scalable solutions."
};
