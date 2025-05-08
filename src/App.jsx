import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import { useState, useRef } from "react";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [isCreatingProject, setIsCreatingProject] = useState(false); //change to false later
  const [projects, setProjects] = useState([]);

  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();

  function handleIsCreatingProject() {
    setIsCreatingProject(true);
  }

  function handleCancel() {
    setIsCreatingProject(false);
  }

  function handleCreateProject(title, description, date) {
    const out = { title, description, date };
    setProjects((old) => {
      const newArr = [...old, out];
      // const newArr = old.concat([out]);

      return newArr;
    });

    return out;
  }

  return (
    <div className="flex flex-row-reverse justify-between">
      {isCreatingProject ? (
        <NewProject
          titleInput={titleInput}
          descriptionInput={descriptionInput}
          dateInput={dateInput}
          onSave={handleCreateProject}
          onCancel={handleCancel}
        ></NewProject>
      ) : (
        <Home onCreateProject={handleIsCreatingProject}></Home>
      )}
      <Sidebar
        projects={projects}
        onCreateProject={handleIsCreatingProject}
      ></Sidebar>
    </div>
  );
}

export default App;
