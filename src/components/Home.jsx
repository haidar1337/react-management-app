import NoProjects from ".././assets/no-projects.png";

export default function Home({ onCreateProject, ...props }) {
  return (
    <div className="flex flex-col flex-auto h-screen justify-center items-center">
      <img src={NoProjects} alt="No Projects" className="h-32 w-32 mb-4" />
      <h1 className="font-extrabold text-grey text-2xl mb-4">
        No Project Selected
      </h1>
      <p className="text-grey opacity-50 mb-8">
        Select a project or create a new one
      </p>
      <button
        onClick={onCreateProject}
        className="bg-zinc-800 text-zinc-400 rounded-md w-48 p-2"
      >
        Create new project
      </button>
    </div>
  );
}
