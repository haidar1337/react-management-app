export default function Tab({ project, onSelect, isActive, ...props }) {
  return (
    <button
      onClick={() => onSelect(project)}
      className={`${
        isActive ? "bg-slate-900" : "bg-slate-950"
      } hover:bg-slate-900 rounded-sm text-white text-left px-2 py-1 w-48 mb-4`}
    >
      {project.title}
    </button>
  );
}
