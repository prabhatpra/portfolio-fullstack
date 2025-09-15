import React, { useState } from "react";

const AddProjectForm = ({ onAddProject, onClose }) => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    image: "",
    tech: "",
    liveLink: "",
    githubLink: "",
    detailLink: "",
  });

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({
      ...projectData,
      tech: projectData.tech.split(",").map((t) => t.trim()),
    });
    setProjectData({
      title: "",
      description: "",
      image: "",
      tech: "",
      liveLink: "",
      githubLink: "",
      detailLink: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Add New Project</h2>
        <input type="text" name="title" placeholder="Project Title" value={projectData.title} onChange={handleChange} className="w-full mb-3 p-2 rounded border" required />
        <input type="text" name="description" placeholder="Description" value={projectData.description} onChange={handleChange} className="w-full mb-3 p-2 rounded border" required />
        <input type="text" name="image" placeholder="Image URL" value={projectData.image} onChange={handleChange} className="w-full mb-3 p-2 rounded border" />
        <input type="text" name="tech" placeholder="Tech Stack (comma separated)" value={projectData.tech} onChange={handleChange} className="w-full mb-3 p-2 rounded border" />
        <input type="text" name="liveLink" placeholder="Live Link" value={projectData.liveLink} onChange={handleChange} className="w-full mb-3 p-2 rounded border" />
        <input type="text" name="githubLink" placeholder="GitHub Link" value={projectData.githubLink} onChange={handleChange} className="w-full mb-3 p-2 rounded border" />
        <div className="flex justify-between mt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add Project</button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
