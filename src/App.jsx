import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import { useState } from "react";
import NewProject from "./components/NewProject.jsx";

const projects = [];

function App() {
  const [isCreatingProject, setIsCreatingProject] = useState(false); //change to false later
  function handleCreateProject() {
    setIsCreatingProject(true);
  }

  function handleCancel() {
    setIsCreatingProject(false);
  }

  return (
    <div className="flex flex-row-reverse justify-between">
      {isCreatingProject ? (
        <NewProject onSave={() => {}} onCancel={handleCancel}></NewProject>
      ) : (
        <Home onCreateProject={handleCreateProject}></Home>
      )}
      <Sidebar onCreateProject={handleCreateProject}></Sidebar>
    </div>
  );
}

export default App;
