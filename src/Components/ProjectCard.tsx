import React from "react";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  github_link: string;
  live_link: string;
  tech_stack: string[];
}

interface ProjectCardProps {
  project: ProjectData;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 bg-white p-5 rounded-xl">
      <img src={project.image} className="max-w-[70%] rounded-md" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-red-500">{project.title}</h2>
        </div>
        <div className="gap-2 flex flex-col">
          <p className="text-md font-semibold">{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.tech_stack.join(",")}
          </p>
        </div>
        <div className="flex flex-col w-full  gap-3">
          <a
            href={project.github_link}
            className="bg-blue-500 text-white rounded-md p-2 w-full flex items-center justify-center"
          >
            View in Github
          </a>
          <a
            href={project.live_link}
            className="bg-blue-500 text-white rounded-md p-2 w-full flex justify-center items-center"
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
