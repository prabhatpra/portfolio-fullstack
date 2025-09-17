import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProjectForm from "./AddProjectForm";
import { demoProjects } from "./ProjectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const Projects = () => {
  const [projects, setProjects] = useState(demoProjects);
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // 👇 Swipe config
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true, 
  });

  return (
    <section
      id="project"
      className="relative w-screen min-h-screen overflow-hidden
                 bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100/70
                 dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70
                 flex flex-col items-center px-4 sm:px-6 md:px-20 py-10 transition-colors duration-700"
    >
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          My Projects
        </h1>

        <div className="text-center">
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors"
            onClick={() => setShowForm(true)}
          >
            Add New Project
          </button>
        </div>

        {/* 👇 Developer Welcome Message */}
        <p className="text-lg sm:text-xl font-medium text-center text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl">
          Welcome to my code-space 👨‍💻 <br />
          Here, logic meets creativity and ideas turn into real experiences. <br />
          Take a look around, and maybe you’ll find a piece of inspiration hidden here ✨
        </p>

        {/* Mobile carousel with swipe */}
        <div
          className="relative w-full lg:hidden overflow-hidden"
          {...handlers} // 👈 swipe handling added here
        >
          {/* Sliding wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className="flex-shrink-0 w-full px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Left button (only lg) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-lg
                       hover:bg-white dark:hover:bg-black hidden lg:flex"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          {/* Right button (only lg) */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-lg
                       hover:bg-white dark:hover:bg-black hidden lg:flex"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Large screen grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 w-full">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* 👇 Thanks Message at the end */}
        <p className="mt-10 text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 italic">
          Thanks for visiting 💙 Your time here means a lot!
        </p>

        {showForm && (
          <AddProjectForm
            onAddProject={handleAddProject}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
