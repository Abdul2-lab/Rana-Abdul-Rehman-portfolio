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
  githubUsername: "Abdul2-lab",
  photo: "/profile 2.jpeg",
  currentlyLearning: "Agentic AI Systems",
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
  { name: "Python", icon: "python", level: 90 },
  { name: "Data Analysis", icon: "data", level: 85 },
  { name: "Machine Learning", icon: "ai", level: 80 },
  { name: "Deep Learning", icon: "dl", level: 72 },
  { name: "NLP", icon: "nlp", level: 75 },
  { name: "LLMs / RAG", icon: "llm", level: 82 },
  { name: "React.js", icon: "react", level: 88 },
  { name: "Node.js / Express", icon: "node", level: 78 },
  { name: "MongoDB", icon: "mongo", level: 75 },
  { name: "Tailwind CSS", icon: "tailwind", level: 90 },
  { name: "CCNA / Networking", icon: "network", level: 65 },
  { name: "Git & GitHub", icon: "github", level: 85 },
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
    details: {
      problem:
        "Manual waste sorting is slow, inconsistent and error-prone, and most recycling facilities still rely on people to separate materials by eye.",
      approach:
        "Collected and preprocessed a labeled image dataset across three categories, then designed and trained a convolutional neural network in TensorFlow/Keras, tuning augmentation, layers and hyperparameters to reduce overfitting on a fairly small dataset.",
      result:
        "Reached 96.56% classification accuracy on the held-out validation set, with a lightweight enough model to run predictions in near real time.",
    },
  },
  {
    title: "AI-Powered Sentiment Analysis System",
    description:
      "Review sentiment analysis app built with DistilBERT and Hugging Face Transformers, classifying reviews as Positive, Neutral or Negative with 93%+ validation accuracy.",
    tags: ["Python", "NLP", "DistilBERT", "Streamlit"],
    image: "/project-2-sentiment-analysis.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
    details: {
      problem:
        "Businesses receive far more customer reviews than anyone can realistically read one by one, making it hard to track overall sentiment or catch problems early.",
      approach:
        "Fine-tuned a DistilBERT transformer model on labeled review data using Hugging Face, then wrapped it in a Streamlit app so non-technical users can paste in reviews and instantly see a sentiment breakdown.",
      result:
        "Achieved 93%+ validation accuracy across Positive, Neutral and Negative classes, with an interface simple enough for a non-developer to use directly.",
    },
  },
  {
    title: "AI-Powered RAG Application",
    description:
      "Retrieval-Augmented Generation app for context-aware Q&A over custom documents — embeddings, vector storage, semantic search and LLM-based responses.",
    tags: ["Python", "LangChain", "ChromaDB", "LLMs"],
    image: "/project-3-rag-application.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
    details: {
      problem:
        "General-purpose LLMs don't know anything about a person's or company's private documents, and often hallucinate answers when asked about content they were never trained on.",
      approach:
        "Built a Retrieval-Augmented Generation pipeline with LangChain — chunking and embedding documents, storing vectors in ChromaDB, and retrieving the most relevant passages to ground each LLM response before it's generated.",
      result:
        "A working Q&A system that answers questions about custom documents with grounded, source-backed responses instead of guesses.",
    },
  },
  {
    title: "College Information Management System",
    description:
      "Full-stack web app for managing students, attendance, fees, subjects, exams, date sheets, inventory and dashboards — frontend, backend APIs and database integration.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/project-4-college-management.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
    details: {
      problem:
        "Colleges often juggle student records, attendance, fees and exams across scattered spreadsheets and paper registers, making day-to-day administration slow and error-prone.",
      approach:
        "Designed a full-stack system with a React frontend and a Node.js/Express REST API backed by MongoDB, covering students, attendance, fees, subjects, exams, date sheets and inventory in one connected dashboard.",
      result:
        "A single system that replaces multiple manual processes with structured records, dashboards and APIs that different parts of the college can rely on.",
    },
  },
  {
    title: "School Information System",
    description:
      "A large full-stack school management system covering students, teachers, classes, attendance, results and records — built end-to-end with a Node.js/Express backend and MongoDB, managed and queried through MongoDB Compass.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MongoDB Compass"],
    image: "/Project 5.jpg",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
    details: {
      problem:
        "Schools need a single, reliable place to manage students, teachers, classes, attendance and results — most existing tools are either too generic or too expensive for smaller institutions.",
      approach:
        "Built a large full-stack system end-to-end: a Node.js/Express backend with a MongoDB database (designed, queried and debugged through MongoDB Compass), and a React frontend covering every core school workflow.",
      result:
        "A complete, scalable school management platform that handles the full student lifecycle from enrollment to results in one place.",
    },
  },
  {
    title: "Autonomous AI Data Scientist",
    description:
      "Agentic AI/ML platform — upload a dataset and 11 AI agents profile, clean, model and explain it end-to-end, with SHAP explainability and a grounded AI chat interface for asking questions about your data.",
    tags: ["Python", "FastAPI", "Scikit-learn", "React"],
    image: "/ai-data-scientist-project.png",
    liveDemo: "#",
    github: `https://${"github.com/Abdul2-lab"}`,
    details: {
      problem:
        "Doing solid exploratory data analysis and model comparison by hand is repetitive and time-consuming — profiling, cleaning, trying multiple models and explaining results usually takes a data scientist hours per dataset.",
      approach:
        "Designed an agentic pipeline of 11 specialized AI agents (profiling, data quality, EDA, modeling and reporting) orchestrated behind a FastAPI backend, training and comparing multiple Scikit-learn models automatically, adding SHAP for explainability, and exposing it all through a React dashboard with a grounded AI chat for asking questions about the data.",
      result:
        "Upload a dataset and get automatic profiling, cleaning, model comparison (accuracy, F1, ROC-AUC), a confusion matrix and SHAP explanations end-to-end — turning a multi-hour manual workflow into a few minutes.",
    },
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