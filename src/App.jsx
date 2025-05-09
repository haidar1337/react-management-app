import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import { useState, useRef } from "react";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();

  function handleIsCreatingProject() {
    setIsCreatingProject((prev) => !prev);
    setSelectedProject(null);
  }

  function handleSelectProject(selected) {
    setSelectedProject(selected);
    setIsCreatingProject(false);
  }

  function handleCancel() {
    setIsCreatingProject(false);
  }

  function handleCreateProject(title, description, date) {
    let out = {};
    setProjects((old) => {
      out = { title, description, date, id: old.length + 1, tasks: [] };

      const newArr = [...old, out];
      return newArr;
    });

    return out;
  }

  let mainContent = <Home onCreateProject={handleIsCreatingProject}></Home>;
  if (isCreatingProject)
    mainContent = (
      <NewProject
        titleInput={titleInput}
        descriptionInput={descriptionInput}
        dateInput={dateInput}
        onSave={handleCreateProject}
        onCancel={handleCancel}
      ></NewProject>
    );
  if (selectedProject && !isCreatingProject)
    mainContent = (
      <Project
        projectId={selectedProject.id}
        projects={projects}
        setProjects={setProjects}
        setSelected={handleSelectProject}
      ></Project>
    );

  return (
    <div className="flex flex-row-reverse justify-between">
      {mainContent}
      <Sidebar
        projects={projects}
        selectedProject={selectedProject}
        onSelectProject={handleSelectProject}
        onCreateProject={handleIsCreatingProject}
      ></Sidebar>
    </div>
  );
}

export default App;
