import React from 'react';
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss,
  SiTypescript, SiCplusplus, SiC, SiDocker, SiSpringboot, SiGooglecloud,
  SiLeetcode, SiCodechef, SiHackerrank, SiGeeksforgeeks
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { VscAzure } from 'react-icons/vsc';
import { Code2, Rocket, Award, Users, Laptop, Database } from 'lucide-react';

// -- SKILLS SECTION DATA --
export const skillsData = [
  // Core Languages & Frontend
  { name: "React", icon: <FaReact size={40} className="text-[#61DAFB]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "JavaScript", icon: <IoLogoJavascript size={40} className="text-[#F7DF1E]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "TypeScript", icon: <SiTypescript size={38} className="text-[#3178C6]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Java", icon: <FaJava size={40} className="text-[#007396]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Python", icon: <FaPython size={40} className="text-[#3776AB]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "C++", icon: <SiCplusplus size={38} className="text-[#00599C]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "C", icon: <SiC size={38} className="text-[#A8B9CC]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#E34F26]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />, bg: "bg-white", border: "border-slate-200" },

  // Backend & Databases
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-[#339933]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Express", icon: <SiExpress size={40} className="text-slate-800" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Spring Boot", icon: <SiSpringboot size={38} className="text-[#6DB33F]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-[#47A248]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Oracle DB", icon: <Database size={38} className="text-[#F80000]" />, bg: "bg-white", border: "border-slate-200" },

  // DevOps & Cloud
  { name: "Docker", icon: <SiDocker size={40} className="text-[#2496ED]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Google Cloud", icon: <SiGooglecloud size={38} className="text-[#4285F4]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "MS Azure", icon: <VscAzure size={38} className="text-[#0078D4]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" />, bg: "bg-white", border: "border-slate-200" },
  { name: "Postman", icon: <SiPostman size={40} className="text-[#FF6C37]" />, bg: "bg-white", border: "border-slate-200" }
];

// -- PROJECTS SECTION DATA --
export const projectsData = [
  {
    title: "CampX",
    category: "Full Stack Academic Platform",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    description: "A centralized academic communication and engagement platform built for colleges to unify announcements, opportunities, events, and real-time student-faculty communication.",
    features: [
      "Role-based Access & JWT Authentication (Students, Faculty, Admins)",
      "Dedicated Dashboards for Students, Faculty & Administrators",
      "Announcements & Opportunity Posting System",
      "Real-time Event Updates & Notification Feeds"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "https://mycampx.vercel.app/"
  },
  {
    title: "VYRO Mobiles",
    category: "E-Commerce Business Storefront",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    description: "Designed and developed a live commercial business storefront for VYRO, a mobile accessories venture, empowering the brand to showcase products and connect with online customers.",
    features: [
      "Clean, modern responsive mobile accessories catalog",
      "Optimized product display & showcase UI",
      "Direct customer inquiry & contact integration",
      "High performance, mobile-first responsive design"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "https://vyromobiles.in"
  },
  {
    title: "Car Rental Web Application",
    category: "Full Stack MERN Booking",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Online Payments"],
    description: "A full-featured vehicle rental and booking platform complete with real-time vehicle listings, secure booking workflows, user authentication, and an administrator management panel.",
    features: [
      "Node.js & Express.js backend with MongoDB data layer",
      "Secure User Authentication & Profile Management",
      "Online Payments & Interactive Vehicle Selection",
      "Comprehensive Admin Management Panel"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "https://urbancruise-2.onrender.com/"
  },
  {
    title: "Student Academic Monitoring System",
    category: "Database & Performance Tracking",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "SQL Queries"],
    description: "A database-driven academic performance monitoring system engineered to track, store, retrieve, and evaluate student records with comprehensive faculty reporting tools.",
    features: [
      "Robust relational database schema for student records",
      "Faculty management panel for tracking performance",
      "Optimized SQL queries for rapid record storage & retrieval",
      "Automated academic report generation tools"
    ],
    github: "https://github.com/ManikantaKaredla",
    demo: "#"
  }
];

// -- EXPERIENCE SECTION DATA --
export const experienceData = [
  {
    role: "Full Stack Development Summer Intern",
    company: "Aditya University",
    duration: "May 2026 – Jul 2026",
    responsibilities: [
      "Developed CampX, a full-stack academic communication platform, using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented JWT-based role authentication with separate dashboards for students, faculty, and administrators.",
      "Built modules for announcements, events, opportunities, and notifications, integrating backend REST APIs.",
      "Deployed the application and managed source code with Git and GitHub."
    ]
  },
  {
    role: "Full Stack Development Trainee",
    company: "Technical Hub, Surampalem",
    duration: "Nov 2024 – May 2025",
    responsibilities: [
      "Trained in full stack development with React.js, Node.js, Express.js, and MongoDB.",
      "Built responsive user interfaces and integrated backend APIs through project-based work.",
      "Collaborated in agile team environments using Git and GitHub following industry software development practices."
    ]
  },
  {
    role: "Student Software Developer",
    company: "Aditya Polytechnic Colleges, Surampalem",
    duration: "Aug 2023 – Jan 2024",
    responsibilities: [
      "Led a student team in developing the Student Academic Monitoring System used for tracking academic performance.",
      "Designed database schemas, implemented CRUD operations, and gathered technical requirements from faculty members.",
      "Optimized SQL queries and improved data flow across the student monitoring platform."
    ]
  }
];

// -- EDUCATION SECTION DATA --
export const educationData = [
  {
    degree: "B.Tech - Computer Science and Engineering",
    major: "Minor: Data Engineering",
    institution: "Aditya University",
    duration: "2025 – 2028 (Expected)",
    score: "CGPA: 7.42"
  },
  {
    degree: "Diploma - Computer Science and Engineering",
    major: "Computer Science & Engineering",
    institution: "Aditya College of Engineering and Technology",
    duration: "2022 – 2025",
    score: "CGPA: 9.1"
  },
  {
    degree: "Secondary School Certificate (SSC / X)",
    major: "General Education",
    institution: "B.V.M Aided High School",
    duration: "2022",
    score: "Percentage: 83.40%"
  }
];

// -- CERTIFICATIONS SECTION DATA --
export const certificationsData = [
  {
    title: "SQL (Basic, Intermediate, Advanced)",
    issuer: "HackerRank",
    category: "Database & SQL",
    badge: "Advanced Certified"
  },
  {
    title: "JavaScript (Intermediate) & Problem Solving (Intermediate)",
    issuer: "HackerRank",
    category: "Programming & DSA",
    badge: "Certified"
  },
  {
    title: "Oracle Database Foundations",
    issuer: "Oracle",
    category: "Databases",
    badge: "Foundations"
  },
  {
    title: "Microsoft Azure Virtual Machines",
    issuer: "Microsoft",
    category: "Cloud Computing",
    badge: "Azure Certified"
  },
  {
    title: "Docker Foundations",
    issuer: "Docker",
    category: "DevOps & Containers",
    badge: "Certified"
  },
  {
    title: "Spring 6: Spring Security, Microservices & Spring Data",
    issuer: "Spring / Coursework",
    category: "Backend Frameworks",
    badge: "Specialization"
  },
  {
    title: "Google Cloud Digital Campus 2.0",
    issuer: "Google Cloud",
    category: "Cloud Infrastructure",
    badge: "Cloud Certified"
  }
];

// -- ACHIEVEMENTS SECTION DATA --
export const achievementsData = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "300+ DSA Problems Solved",
    description: "Solved 300+ algorithms and data structures problems across LeetCode, CodeChef, and GeeksforGeeks."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Hackathon Competitor",
    description: "Participated in Smart India Hackathon (internal round), HackYatra, Hacktriad 2.0, and HackMelaa 2026."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "GDG Build with AI & Google Cloud",
    description: "Attended GDG Build with AI Bootcamp and Google Cloud HackSprint 2K25, building real-world AI & cloud apps."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "State-Level Tech Fest Selection",
    description: "Selected and recognized for presentation at the prestigious State-Level Technical Symposium during Diploma."
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Technical Community Volunteer",
    description: "Volunteer organizer for Code Carnival technical event; active participant in university technical events."
  }
];

// -- CODING PROFILES SECTION DATA --
export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "lxckyyy09",
    url: "https://leetcode.com/u/lxckyyy09/",
    icon: <SiLeetcode className="h-5 w-5 text-[#FFA116]" />
  },
  {
    platform: "CodeChef",
    username: "manikanta009k",
    url: "https://www.codechef.com/users/manikanta009k",
    icon: <SiCodechef className="h-5 w-5 text-[#5B4638]" />
  },
  {
    platform: "HackerRank",
    username: "luckyha0637k",
    url: "https://www.hackerrank.com/profile/luckyha0637k",
    icon: <SiHackerrank className="h-5 w-5 text-[#2EC866]" />
  },
  {
    platform: "GeeksforGeeks",
    username: "lxckyyy09",
    url: "https://www.geeksforgeeks.org/user/lxckyyy09/",
    icon: <SiGeeksforgeeks className="h-5 w-5 text-[#2F8D46]" />
  }
];

// -- CONTACT SECTION DATA --
export const contactData = {
  heading: "Let's Build Something Great",
  availableFor: [
    "Software Engineering Internships",
    "Full Stack Developer Roles",
    "MERN Stack Projects",
    "Open Source & Technical Collaborations"
  ]
};

// -- HERO SECTION DATA --
export const heroData = {
  headline: "Software Developer & MERN Stack Engineer",
  subHeadline: "Computer Science student (B.Tech with Data Engineering minor) building reliable, scalable web applications and solving complex algorithmic challenges.",
  useLinkedInSync: false,
  linkedinUsername: "manikanta-karedla-598a352b0",
  profileImage: "https://unavatar.io/linkedin/manikanta-karedla-598a352b0?fallback=false",
  stats: [
    { value: "300+", label: "DSA Problems Solved" },
    { value: "4+", label: "Web Applications" },
    { value: "7+", label: "Industry Certifications" },
    { value: "GDG", label: "Build with AI & Cloud" }
  ]
};

// -- ABOUT SECTION DATA --
export const aboutData = {
  description1: "I am a dedicated Computer Science and Engineering student at Aditya University (graduating 2028) with a minor in Data Engineering and practical full-stack software experience. With 300+ DSA problems solved across LeetCode, CodeChef, and GeeksforGeeks, I specialize in architecting clean, responsive web applications using the MERN stack, REST APIs, and relational/NoSQL databases.",
  description2: "From engineering live platforms like CampX and VYRO Mobiles to competing in high-intensity hackathons (Smart India Hackathon, HackYatra, Hacktriad 2.0, HackMelaa 2026) and participating in Google Developer Groups (GDG Build with AI & Google Cloud HackSprint 2K25), I continuously expand my engineering depth to build reliable, user-focused digital products."
};
