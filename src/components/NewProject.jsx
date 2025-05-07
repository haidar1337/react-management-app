import Input from "./Input.jsx";

export default function NewProject({ onCancel, onSave, ...props }) {
  return (
    <div className="flex flex-col flex-auto justify-center items-center m-48">
      <div className="flex flex-row items-center self-end mb-8">
        <button onClick={onCancel} className="mr-2">
          Cancel
        </button>
        <button
          onClick={onSave}
          className="bg-slate-900 text-white w-20 h-12 rounded-md"
        >
          Save
        </button>
      </div>

      <div className="flex flex-col basis-1 flex-auto w-full self-start justify-start items-start">
        <Input type={"text"} title={"title"} isTextArea={false}></Input>
        <Input type={"text"} title={"description"} isTextArea={true}></Input>
        <Input type={"date"} title={"date"} isTextArea={false}></Input>
      </div>
    </div>
  );
}
