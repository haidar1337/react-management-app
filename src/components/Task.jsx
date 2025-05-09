export default function Task({ task, onClear, ...props }) {
  return (
    <div className="flex flex-row w-full justify-between mb-2">
      <p className="font-medium">{task.content}</p>
      <button onClick={() => onClear(task)} className="font-medium">
        Clear
      </button>
    </div>
  );
}
