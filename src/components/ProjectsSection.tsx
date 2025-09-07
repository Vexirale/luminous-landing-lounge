import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "fatbikeparts.eu founder",
      description: "gimmie my money",
      technologies: ["E-Commerce"],
      liveUrl: "https://www.fatbikeparts.eu",
      githubUrl: "#",
      gradient: "from-white/20 to-gray-500/20"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
        stuff that i did
      </h2>
      
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <ProjectCard
            key={projects[0].title}
            title={projects[0].title}
            description={projects[0].description}
            technologies={projects[0].technologies}
            liveUrl={projects[0].liveUrl}
            githubUrl={projects[0].githubUrl}
            gradient={projects[0].gradient}
            animationDelay="0s"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
