import {
  DiHtml5,
  DiSass,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPostgresql,
  DiRedis,
  DiDocker,
  DiLinux,
} from "react-icons/di";

import "../styles/components/technologies-container.sass";

const technologies = [
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    text: "Expertise in scalable, high-performance development. Skilled in RESTful APIs, Express.js, and real-time applications with WebSocket.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    text: "Proficient in JavaScript, including ES6+. Developed dynamic web applications with React.js and Node.js.",
  },
  {
    id: "docker",
    name: "Docker",
    icon: <DiDocker />,
    text: "Skilled in Docker for consistent environments across development, testing, and production.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <DiMysql />,
    text: "Experienced in MySQL database design, performance optimization, and data integrity.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: <DiPostgresql />,
    text: "Adept in PostgreSQL for efficient SQL queries and advanced data management.",
  },
  {
    id: "redis",
    name: "Redis",
    icon: <DiRedis />,
    text: "Knowledgeable in Redis for in-memory data storage and caching to boost performance.",
  },
  {
    id: "linux",
    name: "Linux",
    icon: <DiLinux />,
    text: "Proficient in Linux server administration, including setup, configuration, and maintenance.",
  },
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    text: "Experienced in creating semantic, responsive, and accessible web pages using HTML5.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass />,
    text: "Skilled in Sass for modular, maintainable stylesheets and optimizing CSS performance.",
  },
  {
    id: "react",
    name: "React.js",
    icon: <DiReact />,
    text: "Proficient in building SPAs with React, focusing on component-based architecture and state management.",
  },
];


function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TechnologiesContainer;
