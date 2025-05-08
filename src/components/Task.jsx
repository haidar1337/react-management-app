export default function Task({ content, ...props }) {
  return (
    <div className="flex flex-row w-full justify-between">
      <p className="font-medium">{content}</p>
      <button className="font-medium">Clear</button>
    </div>
  );
}
