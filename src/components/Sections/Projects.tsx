import { twMerge } from "tailwind-merge";
import { RightIcon } from "../Icons/RightIcon";

const projects = [
  {
    title: "Project 1",
    description: "This is project 1",
    image: "/images/project1.png",
    url: "https://github.com/uzagidev",
    technologies: ["React", "TypeScript", "Vite"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Project 2",
    description: "This is project 2",
    image: "/images/project2.png",
    url: "https://github.com/uzagidev",
    technologies: ["React", "TypeScript", "Vite"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Project 3",
    description: "This is project 3",
    image: "/images/project3.png",
    url: "https://github.com/uzagidev",
    technologies: ["React", "TypeScript", "Vite"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Project 4",
    description: "This is project 4",
    image: "/images/project4.png",
    url: "https://github.com/uzagidev",
    technologies: ["React", "TypeScript", "Vite"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen p-6">
      <div className="container relative h-full py-6 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white">
            My Projects
          </h1>
          <p className="text-gray-200 mt-4 mb-2">
            Here are some of my projects
          </p>
        </div>
        <div className="mt-16">
          {projects.map((project, index) => (
            <div key={project.title} className="h-screen w-full px-4 mb-2">
              <div
                className={twMerge(
                  "flex flex-col md:flex-row items-center md:items-start justify-between gap-6",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="w-full md:w-1/2 h-[256px] md:h-[512px] bg-white">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full object-cover"
                    />
                  </a>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4">
                  <h2 className="text-lg font-bold">{project.title}</h2>
                  <p className="text-gray-200">{project.description}</p>
                  <p className="text-gray-200">Core features:</p>
                  <ul className="list-disc list-inside marker:text-lime-400">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-gray-200">Built with:</p>
                  <div className="flex flex-row flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-[max-content] mt-2 px-8 py-2 hover:-translate-y-1 border-2 border-white uppercase bg-white text-black 
                    transition duration-200 text-sm shadow-[5px_5px_10px_0px_#c2410c] hover:shadow-[9px_9px_10px_0px_#ea580c]"
                  >
                    View Project
                    <RightIcon className="inline-block ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
