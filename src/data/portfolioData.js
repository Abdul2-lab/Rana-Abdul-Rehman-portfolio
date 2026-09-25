// 1) Sign up free at https://formspree.io (verify your email)
// 2) Create a new Form, copy its endpoint (looks like https://formspree.io/f/xxxxxxxx)
// 3) Paste it below, replacing the placeholder — Contact.jsx uses this to send messages
export const formspreeEndpoint = "https://formspree.io/f/mzezvoyo";

export const profile = {
  name: "Rana Abdul Rehman",
  firstName: "Rana",
  lastName: "Abdul Rehman",
  title: "AI Engineer | Full Stack Developer",
  tagline:
    "I build intelligent solutions, turn ideas into real projects, and love solving problems with code.",
  location: "Gujranwala, Pakistan",
  phone: "+92 313 1796980",
  email: "abdulrehman434gcg@gmail.com",
  linkedin: "linkedin.com/in/rana-rehman-3b71763b1",
  github: "github.com/Abdul2-lab",
  photo: "/profile 2.jpeg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  text: "Highly organized, detail-oriented and adaptable professional with a strong foundation in computer science, data handling and technical problem-solving. I work with digital tools, software applications and AI-based projects, and I enjoy learning new tools and systems quickly.",
  stats: [
    { label: "BS IT", value: "GCUF, Faisalabad (2021-2025)" },
    { label: "3.17/4.0", value: "CGPA" },
    { label: "Based in", value: "Gujranwala, Pakistan" },
  ],
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
};

export const skills = [
  { name: "Python", icon: "python" },
  { name: "Data Analysis", icon: "data" },
  { name: "Machine Learning", icon: "ai" },
  { name: "Deep Learning", icon: "dl" },
  { name: "NLP", icon: "nlp" },
  { name: "LLMs / RAG", icon: "llm" },
  { name: "React.js", icon: "react" },
  { name: "Node.js / Express", icon: "node" },
  { name: "MongoDB", icon: "mongo" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "CCNA / Networking", icon: "network" },
  { name: "Git & GitHub", icon: "github" },
];

export const projects = [
  {
    title: "Waste Image Classification using CNN",
    description:
      "CNN-based deep learning model that classifies waste images into Cardboard, Glass and Paper — 96.56% accuracy after full preprocessing, training and evaluation.",
    tags: ["Python", "TensorFlow/Keras", "CNN"],
    image: "/project-1-waste-classification.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
  },
  {
    title: "AI-Powered Sentiment Analysis System",
    description:
      "Review sentiment analysis app built with DistilBERT and Hugging Face Transformers, classifying reviews as Positive, Neutral or Negative with 93%+ validation accuracy.",
    tags: ["Python", "NLP", "DistilBERT", "Streamlit"],
    image: "/project-2-sentiment-analysis.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
  },
  {
    title: "AI-Powered RAG Application",
    description:
      "Retrieval-Augmented Generation app for context-aware Q&A over custom documents — embeddings, vector storage, semantic search and LLM-based responses.",
    tags: ["Python", "LangChain", "ChromaDB", "LLMs"],
    image: "/project-3-rag-application.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
  },
  {
    title: "College Information Management System",
    description:
      "Full-stack web app for managing students, attendance, fees, subjects, exams, date sheets, inventory and dashboards — frontend, backend APIs and database integration.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/project-4-college-management.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
  },
  {
    title: "School Information System",
    description:
      "A large full-stack school management system covering students, teachers, classes, attendance, results and records — built end-to-end with a Node.js/Express backend and MongoDB, managed and queried through MongoDB Compass.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MongoDB Compass"],
    image: "/project-5-school-information-system.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
  },
];

export const experience = [
  {
    title: "AI Prompt Engineering Intern",
    org: "InAmigos Foundation",
    meta: "Aug 2026 - Sep 2026  |  Remote",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Artificial Intelligence & Data Science Training",
    org: "Dev Valley Software House & Incubation Hub",
    meta: "2026",
    image: "https://images.unsplash.com/photo-1695144244472-a4543101ef35?w=800&q=80",
  },
  {
    title: "Full Stack Web Development Training",
    org: "Dev Valley Software House & Incubation Hub",
    meta: "2026",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
  },
  {
    title: "Full Stack Web Development Course",
    org: "NAVTTC",
    meta: "2026",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=800&q=80",
  },
  {
    title: "CCNA / Networking Training",
    org: "TEVTA",
    meta: "2026",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=800&q=80",
  },
];

export const certifications = [
  {
    name: "AI & Data Science Training",
    desc: "Dev Valley Software House",
    logo: "https://ui-avatars.com/api/?name=Dev+Valley&background=2563eb&color=fff&bold=true&size=128",
  },
  {
    name: "Full Stack Web Dev Training",
    desc: "Dev Valley Software House",
    logo: "https://ui-avatars.com/api/?name=Dev+Valley&background=1d4ed8&color=fff&bold=true&size=128",
  },
  {
    name: "Full Stack Web Dev Course",
    desc: "NAVTTC",
    logo: "https://ui-avatars.com/api/?name=NAVTTC&background=0ea5e9&color=fff&bold=true&size=128",
  },
  {
    name: "CCNA / Networking",
    desc: "TEVTA",
    logo: "https://ui-avatars.com/api/?name=TEVTA&background=6366f1&color=fff&bold=true&size=128",
  },
  {
    name: "Google AI Essentials",
    desc: "Google, 2026",
    logo: "https://cdn.simpleicons.org/google/4285F4",
  },
  {
    name: "MS Office Proficiency",
    desc: "TEVTA, 2020",
    logo: "https://cdn.simpleicons.org/microsoftoffice/D83B01",
  },
];
