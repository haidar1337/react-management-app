import { useRef, useState } from "react";
import Input from "./Input";
import Task from "./Task";

export default function Project({
  projectId,
  projects,
  setProjects,
  setSelected,
}) {
  const taskRef = useRef();
  const [hasError, setHasError] = useState(false);
  const project = projects.find((p) => p.id === projectId);

  function handleDeleteProject() {
    setProjects((prev) => {
      return [...prev.filter((p) => p.id !== project.id)];
    });

    setSelected(null);
  }

  function handleClearTask(task) {
    const found = project.tasks.find((t) => t.id === task.id);
    if (!found) {
      setHasError(true);
      return;
    }

    setProjects((prev) => {
      return prev.map((p) => {
        if (p.id === project.id) {
          return {
            ...p,
            tasks: [...p.tasks.filter((t) => t.id !== found.id)],
          };
        }
        return p;
      });
    });
  }

  function handleAddTask() {
    const task = taskRef.current.value;
    if (!task) {
      setHasError(true);
      return;
    }

    setProjects((prev) => {
      return prev.map((p) => {
        if (p.id === project.id) {
          return {
            ...p,
            tasks: [...p.tasks, { id: p.tasks.length + 1, content: task }],
          };
        }
        return p;
      });
    });

    taskRef.current.value = ""; // Clear input after adding
  }

  return (
    <div className="flex flex-col flex-auto justify-center items-center m-48">
      <div className="flex flex-row justify-between w-full mb-2">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <button onClick={handleDeleteProject}>Delete</button>
      </div>
      <div className="flex flex-col self-start justify-center items-start w-full">
        <p className="text-grey opacity-50 text-md mb-4">
          {project.date.toDateString()}
        </p>
        <p>{project.description}</p>
        <hr className="w-full bg-gray-200 h-1 my-4" />
        <h2 className="font-bold text-xl mb-4">Tasks</h2>
      </div>
      <div className="flex flex-row self-start justify-start items-center w-1/2">
        <Input
          ref={taskRef}
          type="text"
          className="bg-slate-300 p-1 w-64"
          isTextArea={false}
        ></Input>
        <button className="w-24" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      {hasError && (
        <p className="text-red-700 text-bold bg-red-100">
          Please make sure you input correct values, and try again.
        </p>
      )}
      <div className="flex flex-col self-start justify-start items-start w-1/2 bg-orange-100 opacity-75 p-4 mt-8">
        {project.tasks.length < 1 && (
          <p>This project doesn't have any tasks yet.</p>
        )}
        {project.tasks.map((t) => {
          return <Task key={t.id} task={t} onClear={handleClearTask}></Task>;
        })}
      </div>
    </div>
  );
}
