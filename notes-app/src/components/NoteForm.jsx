import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    if (!title || description) return;

    const newNote = {
      title,
      priority,
      category,
      description,
      createdAt: new Date().toISOString(),
    };

    console.log(newNote);

    // Clear form
    setTitle("");
    setPriority("Medium");
    setCategory("Work");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6"
    >
      {/* Title */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter note title"
          className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Priority */}
      <div className="flex flex-col">
        <label htmlFor="priority" className="text-gray-700 font-medium mb-2">
          Priority
        </label>
        <select
          id="priority"
          className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label htmlFor="category" className="text-gray-700 font-medium mb-2">
          Category
        </label>
        <select
          id="category"
          className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">📂 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label htmlFor="description" className="text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          placeholder="Write your note..."
          className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:outline-none transition resize-none h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-purple-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-purple-600 transition"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
