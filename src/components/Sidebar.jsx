import Tab from "./Tab";

export default function Sidebar({ onCreateProject, ...props }) {
  return (
    <div className="flex-initial rounded-r-lg mt-8 p-8 h-screen w-72 bg-slate-950">
      <h1 className="text-white text-2xl mb-8 font-bold">YOUR PROJECTS</h1>
      <button
        onClick={onCreateProject}
        className="rounded-md bg-zinc-800 text-zinc-400 w-32 h-12 mb-8"
      >
        + Add Project
      </button>
      <Tab isActive={true} title={"Learning React"}></Tab>
    </div>
  );
}
