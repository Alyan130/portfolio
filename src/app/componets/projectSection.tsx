import React from "react";
import ProjectCard from "./projectcard";
import pic1 from "@/app/public/4335772.jpg";
import pic2 from "@/app/public/45211.jpg"
import pic3 from "@/app/public/52355.jpg"
import pic4 from "@/app/public/resume-application-employment-form-concept.jpg"
import pic5 from "@/app/public/8841879.jpg"
import pic6 from "@/app/public/AdobeStock_410668425_Preview_Editorial_Use_Only.jpeg";

interface Project {
  id: number;
  title: string;
  description: string;
  image:string; 
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Iphone Ecommerce Website",
    description: "Multipage responsive website",
    image:pic1.src,
    gitUrl: "https://github.com/Alyan130/Figma-Website.git",
    previewUrl: "https://iphone-website-two.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description: "full Netflix website clone",
    image:pic6.src,
    gitUrl: "https://github.com/Alyan130/CSS_Project1.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Resume Builder",
    description: "Dynamic resume builder",
    image:pic4.src,
    gitUrl: "https://github.com/Alyan130/shareable_resume.git",
    previewUrl: "https://shareable-resume-builder-brown.vercel.app/",
  },
  {
    id: 4,
    title: "Inetractive Quizz App",
    description: "Check your knowlegde about javascript DOM",
    image:pic5.src,
    gitUrl: "https://github.com/Alyan130/Quizz_Project.git",
    previewUrl: "https://alyan130.github.io/Quizz_Project/",
  },

  {
    id: 5,
    title: "Student Management System",
    description: "Manage large amount of student data with this system built in typescript",
    image: pic3.src,
    gitUrl: "/https://github.com/Alyan130/student-Mangement-System.git",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "Weather App",
    description: "Weather application using mock API",
    image:pic2.src,
    gitUrl: "https://github.com/Alyan130/weather-widget.git",
    previewUrl: "https://weather-app-six-xi-81.vercel.app/",
  }
]
 

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <li
            key={project.id}
            className="opacity-0 translate-y-12 transition-opacity transition-transform duration-300"
            style={{
              transitionDelay: `${index * 0.4}s`,
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
