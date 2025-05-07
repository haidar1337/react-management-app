export default function Input({ title, type, isTextArea, ...props }) {
  const inputClasses = "bg-slate-300 p-1 w-full mb-4";
  return (
    <>
      <p className="font-bold uppercase text-slate-900 text-sm opacity-50">
        {title}
      </p>
      {isTextArea ? (
        <textarea type={type} className={inputClasses}></textarea>
      ) : (
        <input type={type} className={inputClasses} />
      )}
    </>
  );
}
