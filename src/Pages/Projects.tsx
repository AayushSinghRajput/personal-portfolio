import React from "react";
import ProjectCard, { ProjectData } from "../Components/ProjectCard.tsx";
import project_image from "../assets/project_image.png";
import facial_image from "../assets/face_image.jpg";
import movie_image from "../assets/movie_image.webp";
import sentiment_image from "../assets/sentiment_image.png";
import spotify_image from "../assets/spotify_image.png";
const projectList: ProjectData[] = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "A job portal where users can search for jobs and apply to them.",
    image: project_image,
    github_link: "https://github.com/AayushSinghRajput/job-portal.git",
    live_link: "https://job-portal-omega-inky.vercel.app/",
    tech_stack: ["React, Node, MongoDB, Express"],
  },
  {
    id: 2,
    title: "AI Facial Analysis & SkinCare Advisor",
    description:
      "An AI-powered facial analysis and skincare advisor that provides generalized skincare recommendations based on your facial features and skin condition.",
    image: facial_image,
    github_link: "https://github.com/AayushSinghRajput/minor-project.git",
    live_link: "https://github.com/AayushSinghRajput/minor-project.git",
    tech_stack: ["React, Node, MongoDB, Express", "Python", "MobileNet"],
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A sleek and responsive Spotify clone built with modern web technologies, offering music stereaming features with a user-friendly interface.",
    image: spotify_image,
    github_link: "https://github.com/AayushSinghRajput/Spotify_Clone.git",
    live_link: "https://github.com/AayushSinghRajput/Spotify_Clone.git",
    tech_stack: ["React", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Sentiment Analysis",
    description:
      "A machine learning-powered tool that analyzes text to determine whether the sentiment expressed is postive, negative, or neutral.",
    image: sentiment_image,
    github_link: "https://github.com/AayushSinghRajput/Sentiment-Analysis.git",
    live_link: "https://github.com/AayushSinghRajput/Sentiment-Analysis.git",
    tech_stack: ["React, Node, MongoDB, Express", "Python"],
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description:
      "An intelligent Movie Recommendation System that suggests personalized movie choices based on user preferences and viewing history.",
    image: movie_image,
    github_link:
      "https://github.com/AayushSinghRajput/Movie_Recommendation_System.git",
    live_link:
      "https://github.com/AayushSinghRajput/Movie_Recommendation_System.git",
    tech_stack: ["React, Node, MongoDB, Express", "Python"],
  },
];
const Projects = () => {
  return (
    <div className=" flex flex-col p-2 gap-5 bg-cyan-500">
      <div className="flex items-center justify-center mt-2">
        <h2 className="text-3xl font-bold text-orange-500">My Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
