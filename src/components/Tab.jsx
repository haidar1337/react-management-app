export default function Tab({ title, isActive, ...props }) {
  return (
    <button
      className={`${
        isActive ? "bg-slate-900" : "bg-slate-950"
      } hover:bg-slate-900 rounded-sm text-white text-left px-2 py-1 w-48 mb-8`}
    >
      {title}
    </button>
  );
}
