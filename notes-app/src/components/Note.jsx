const Note = ({note, deleteNote}) => {
      // Priority color helper
  const getPriorityColor = (priority = "") => {
    const level = priority.toLowerCase();

    if (level === "high") return "#FF4136";
    if (level === "medium") return "#FF851B";
    if (level === "low") return "#2ECC40";

    return "#AAAAAA";
  };
    return ( 
      {notes.map((note) => (
          <div
            key={note.id}
            style={{
              borderLeft: `8px solid ${getPriorityColor(note.priority)}`,
              borderRadius: "12px",
              boxShadow: "-4px 0 6px -2px rgba(0, 0, 0, 0.6)",
              transition: "border-left-color 0.3s ease",
            }}
            className="bg-white p-4 shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{note.title}</h3>
              <span className="text-sm text-gray-500">{note.category}</span>
            </div>
  
            <p className="text-gray-700 mt-2">{note.description}</p>
  
            <button
              onClick={() => deleteNote(note.id)}
              className="mt-3 text-red-500 hover:text-red-700 transition"
            >
              🗑️ Delete
            </button>
  
            <div className="text-xs text-gray-400 mt-2">
              Priority: {note.priority}
            </div>
          </div>
        ))}
      </div>
    );
}

export default Note: