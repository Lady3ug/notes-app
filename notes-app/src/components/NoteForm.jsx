import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);

    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });

    setIsFormVisible(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg hover:bg-purple-200 transition mb-4"
      >
        {isFormVisible ? "Hide Form ➖" : "Add New Note ➕"}
      </button>

      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6"
        >
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
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
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "📂 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

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
