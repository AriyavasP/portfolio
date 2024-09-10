'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const dataProject = [
    {
      id: 1,
      name: "Restaurant Menu (Freelance)",
      description: `This project focuses on developing a comprehensive menu management system. It begins with creating features for adding and editing menu items, ensuring ease of use for administrators to manage menu content efficiently. The next focus is on organizing menus into categories, allowing users to navigate and present menu items in a clear and orderly manner. Lastly, the design will be responsive, ensuring seamless use across all devices, including mobile phones, tablets, and desktops. The system will be built using Laravel, a robust and flexible PHP framework, to ensure long-term usability and scalability.`,
    },
    {
      id: 2,
      name: "Rubber Trade",
      description: "This project involves a sophisticated rubber auction system with key functionalities such as handling auctions, processing payments, creating contracts on a blockchain, and generating official government reports. The main responsibilities include maintaining the current system and enhancing it using cutting-edge technologies like NestJS and Angular. Additionally, the role requires designing reports with JasperReports for government documentation, developing database structures based on feature requirements, and implementing system monitoring to ensure smooth operations. Another important aspect of this project is managing the CI/CD pipeline for efficient deployment and overseeing release processes to ensure timely updates and improvements.",
    },
    {
      id: 3,
      name: "Retail Selft Service",
      description: "This project centers around building a self-service system for discount calculation and payment processing using Golang. The API is designed to handle SKU promotion calculations, ensuring precise discounting for products. To ensure robust functionality, unit tests are implemented, and performance is enhanced through the use of message queues. Furthermore, the system is integrated into the AWS ecosystem, leveraging its powerful tools and services for scalability and efficiency.",
    }
  ];

  const skills = [
    { id: 1, category: "Backend Development", details: "SQL, API development with Node.js, Database Design" },
    { id: 2, category: "Cloud Deployment", details: "Azure, AWS" },
    { id: 3, category: "DevOps Tools", details: "Jenkins, Docker, Kubernetes" },
    { id: 4, category: "Frameworks", details: "NestJS, Vue.js, Electron" },
    { id: 5, category: "Programming Languages", details: "JavaScript, TypeScript, PHP, GoLang, SQL" },
    { id: 6, category: "Other Tools", details: "Jasper Reports, Jenkins pipeline" }
  ];

  const companyExperience = [
    {
      companyName: "Sirisoft",
      position: "Software Developer",
      duration: "Jun 2023 - Jul 2024",
      responsibilities: [
        "Specialized in backend development, including comprehensive database design and efficient API development using Node.js.",
        "Utilized Jasper Reports for generating detailed reports to meet specific business requirements.",
        "Managed deployment processes using Jenkins, ensuring smooth deployments across development, UAT, and production environments.",
        "Created Proof of Concept (POC) documents for pre-sale projects, supporting business initiatives by demonstrating technical feasibility.",
        "Deployed and supported production environments on Azure and AWS, providing reliable out-of-hours support."
      ],
      skillSummary: [
        "Backend Development (SQL, API development with Node.js, Database Design)",
        "Cloud Deployment (Azure, AWS)",
        "DevOps Tools (Jenkins, Docker, Kubernetes)",
        "Report Generation (Jasper Reports)",
        "Programming Languages (JavaScript, TypeScript, PHP, GoLang)"
      ]
    }
  ];

  useEffect(() => {
    setProjects([dataProject[0]]);
  }, []);

  const loadMoreProjects = () => {
    setProjects(dataProject);
    setIsAllLoaded(true);
  };

  return (
    <main className="container mx-auto px-10 py-20 bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center py-12">
        <div className="md:w-1/2 space-y-4 mx-4">
          <h1 className="text-4xl font-bold text-white">Hello! Im Ariyavas, a Software Developer</h1>
          <p className="text-gray-300">
            Experienced Software Developer with expertise in web development, backend development,
            and deployment processes. Known for delivering high-quality solutions and supporting production environments.
          </p>
          <a href="#contact" className="inline-block px-6 py-3 bg-white text-black rounded-md">
            Contact Me
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center mx-4">
          <img src="https://i.ibb.co/d6rZCVH/420091505-894881175374715-2935842492732210767-n.jpg" alt="Ariyavas portrait" className="rounded-full w-full max-w-xs md:max-w-sm" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-semibold mb-6 text-white">My Projects</h2>
        {projects.map(project => (
          <div key={project.id} className="bg-black border border-white p-6 rounded-lg m-5">
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a href="#project-details" className="text-white hover:text-gray-400 mt-4 inline-block">View project</a>
          </div>
        ))}
        <div className="flex justify-center mt-8">
          {!isAllLoaded && (
            <button
              onClick={loadMoreProjects}
              className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Load More...
            </button>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="company-experience" className="py-12">
        <h2 className="text-3xl font-semibold mb-6 text-white">Company Experience</h2>
        {
          companyExperience.map((experience, index) => (
            <div key={index} className="bg-black border border-white p-6 rounded-lg m-5">
              <h3 className="text-xl font-semibold text-white">{experience.companyName}</h3>
              <p className="text-white">
                <span className="font-bold">Position:</span> {experience.position}
              </p>
              <p className="text-white">
                <span className="font-bold">Duration:</span> {experience.duration}
              </p>
              <p className="text-white"><span className="font-bold">Description:</span></p>
              <ul className="list-disc ml-5 mt-4 text-gray-300">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
              <p className="text-white"><span className="font-bold">Skill Summary:</span></p>
              <ul className="list-disc ml-5 mt-4 text-gray-300">
                {experience.skillSummary.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </section>

      {/* Skills Section */}
      <section id="skill" className="py-12">
        <h2 className="text-3xl font-semibold mb-6 text-white">My skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
          {skills.map(skill => (
            <li key={skill.id}>
              <span className="font-bold">{skill.category}:</span> {skill.details}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-black flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">Contact</h2>

        <p className="text-white text-center mb-4">
          If you have any questions or would like to discuss a project, feel free to reach out. You can contact me via email or phone:
        </p>

        <p className="text-white text-center mb-4">
          Email: <span className="font-semibold">ariyavas@gmail.com</span><br />
          Phone: <span className="font-semibold">+66 99-243-9788</span>
        </p>
      </section>
    </main>
  );
}