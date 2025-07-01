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
    name: "Secure Payment API",
    description:
      "Spring Boot backend with JWT auth, HTTPS, and real-time transaction monitoring. Ensured PCI compliance. Deployed on AWS with 99.9% uptime.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/cybertron1408", // Update if needed
  },
  {
    name: "Financial Data Validator",
    description:
      "Spring Batch app for validating large financial CSV files, built with PostgreSQL. Features error detection and compliance reporting.",
    tags: [
      {
        name: "springbatch",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/cybertron1408", // Update if needed
  },
];

export { services, technologies, experiences, testimonials, projects };
