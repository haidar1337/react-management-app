import Input from "./Input.jsx";
import { useState } from "react";

export default function NewProject({
  onCancel,
  onSave,
  titleInput,
  descriptionInput,
  dateInput,
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  function handleSave(title, description, date) {
    if (!title || !description || !date) {
      setHasError(true);
      return;
    }

    const parsedDate = new Date(date);

    const created = onSave(title, description, parsedDate);
    if (!created) {
      setHasError(true);
      return;
    }

    onCancel();
  }

  return (
    <div className="flex flex-col flex-auto justify-center items-center m-48">
      <div className="flex flex-row items-center self-end mb-8">
        <button onClick={onCancel} className="mr-2">
          Cancel
        </button>
        <button
          onClick={() =>
            handleSave(
              titleInput.current.value,
              descriptionInput.current.value,
              dateInput.current.value
            )
          }
          className="bg-slate-900 text-white w-20 h-12 rounded-md"
        >
          Save
        </button>
      </div>

      <div className="flex flex-col basis-1 flex-auto w-full self-start justify-start items-start">
        <p className="font-bold uppercase text-slate-900 text-sm opacity-50">
          Title
        </p>
        <Input
          ref={titleInput}
          className="bg-slate-300 p-1 w-full mb-4"
          type={"text"}
          isTextArea={false}
        ></Input>

        <p className="font-bold uppercase text-slate-900 text-sm opacity-50">
          Description
        </p>
        <Input
          ref={descriptionInput}
          type="text"
          className="bg-slate-300 p-1 w-full mb-4"
          isTextArea={true}
        ></Input>

        <p className="font-bold uppercase text-slate-900 text-sm opacity-50">
          Date
        </p>
        <Input
          ref={dateInput}
          type="date"
          className="bg-slate-300 p-1 w-full mb-4"
          isTextArea={false}
        ></Input>
      </div>
      {hasError && (
        <p className="text-red-700 text-bold bg-red-100">
          Please make sure you input correct values, and try again.
        </p>
      )}
    </div>
  );
}
