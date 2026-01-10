import { useState } from "react";
import TextInput from "././inputs/TextInput";
import SelectInput from "./inputs/SelectInput";

const NoteForm = ({ notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newNote = {
      id: Date.now(),
      title,
      priority,
      category,
      description,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setPriority("Medium");
    setCategory("Work");
    setDescription("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ➖" : "Add New Note ➕"}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6"
        >
          <TextInput
            label="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={value}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟠 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={value}
            onChange={handleChange}
            options={[
              { value: "Work", label: "📂 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Write your note..."
              className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 resize-none h-24"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-semibold py-3 rounded-xl hover:bg-purple-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
