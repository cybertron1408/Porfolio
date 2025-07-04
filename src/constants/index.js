import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  algoware,
  dronahq,
  postgresql,
  sql,
  java,
  spring,
  aws,
  linux,
  github,
  carrent,
  jobit,
  tripguide,
  threejs,
  githubimg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Enthusiast",
    icon: docker,
  },
  {
    title: "Low-Code Automation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java, // Replace with custom Java icon if available
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "MySQL",
    icon: sql, // Replace with MySQL icon if available
  },
  {
    name: "PostgreSQL",
    icon: postgresql, // Replace with PostgreSQL icon if available
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws, // Replace with AWS icon if available
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs, // Replace with Angular icon if available
  },
];

const experiences = [
  {
    title: "Java Full Stack Developer",
    company_name: "Algoware Techworks",
    icon: algoware,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Designed and delivered secure payment processing systems using Spring Boot and Hibernate.",
      "Developed RESTful APIs and microservices, reducing response time by 35%.",
      "Implemented CI/CD pipelines with Docker and GitHub Actions.",
      "Managed Agile sprints and maintained high code quality.",
    ],
  },
  {
    title: "SDE Contract via Algoware Techworks",
    company_name: "DronaHQ ",
    icon: dronahq,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Apr 2025",
    points: [
      "Automated workflows using SQL and REST APIs in a low-code platform.",
      "Converted business requirements into scalable solutions.",
      "Created documentation and user guides aligned with compliance standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Chhatrapal consistently delivered high-quality backend features and improved overall system performance.",
    name: "Team Lead",
    designation: "Senior Engineer",
    company: "Algoware Techworks",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Chhatrapal showed great ownership and delivered under tight deadlines, especially during critical automation rollouts.",
    name: "Product Owner",
    designation: "PO",
    company: "DronaHQ",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    testimonial:
      "Working with Chhatrapal was a pleasure — his deep understanding of Java microservices helped us cut delivery time by weeks.",
    name: "Engineering Manager",
    designation: "Lead Developer",
    company: "Algoware Techworks",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    testimonial:
      "He proactively built reusable components and low-code integrations, which helped scale our client solutions quickly.",
    name: "Automation Lead",
    designation: "Solutions Architect",
    company: "DronaHQ",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

const projects = [
  {
    name: "Task Manager API",
    description:
      "A RESTful API built with Spring Boot and MongoDB to manage tasks. Includes JWT-based authentication, role-based access control, and Docker support for containerized deployment.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: githubimg, // Replace with actual image
    source_code_link: "https://github.com/cybertron1408/api-taskmanager",
  },
  {
    name: "Voting Poll App",
    description:
      "A full-stack web application for creating and voting on polls. Built with Java 17+, Spring Boot, JPA, Thymeleaf, and Bootstrap 5. Implements user authentication, voting logic, and poll management.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "thymeleaf", color: "green-text-gradient" },
      { name: "jpa", color: "pink-text-gradient" },
      { name: "bootstrap", color: "orange-text-gradient" },
      { name: "java17", color: "blue-text-gradient" },
    ],
    image: githubimg,
    source_code_link: "https://github.com/cybertron1408/VotingPollApp",
  },
  {
    name: "Personal Portfolio",
    description:
      "A modern, responsive personal portfolio built with React.js and Tailwind CSS. Showcases projects, technical skills, GitHub contributions, and includes smooth scroll and animation effects.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
    ],
    image: githubimg,
    source_code_link: "https://github.com/cybertron1408/Portfolio",
  },
  {
    name: "Real-Time Chat App",
    description:
      "A real-time chat application using Spring Boot, WebSocket (STOMP over SockJS), and Bootstrap. Features include dark mode, auto-scroll, avatar initials, and responsive chat UI.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "websocket", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
      { name: "sockjs", color: "blue-text-gradient" },
    ],
    image: githubimg,
    source_code_link: "https://github.com/cybertron1408/RealTimeChatApplication",
  },
  {
    name: "To-Do App",
    description:
      "A full-stack to-do list app built with Java 17+, Spring Boot, Thymeleaf, Bootstrap 5, and Docker. Deployed on Render with support for adding, updating, and deleting tasks.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "thymeleaf", color: "green-text-gradient" },
      { name: "bootstrap5", color: "pink-text-gradient" },
      { name: "docker", color: "orange-text-gradient" },
      { name: "render", color: "blue-text-gradient" },
    ],
    image: githubimg,
    source_code_link: "https://github.com/cybertron1408/TodoApp",
  },
];


export { services, technologies, experiences, testimonials, projects };
