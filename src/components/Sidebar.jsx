import Tab from "./Tab";

export default function Sidebar() {
  return (
    <div className="flex-col rounded-r-lg  grow mt-8 p-8 h-screen w-72 container bg-slate-950">
      <h1 className="text-white mb-8 font-bold">YOUR PROJECTS</h1>
      <button className="rounded-md bg-zinc-800 text-zinc-400 w-32 h-12 mb-8">
        + Add Project
      </button>
      <Tab isActive={true} title={"Learning React"}></Tab>
    </div>
  );
}
