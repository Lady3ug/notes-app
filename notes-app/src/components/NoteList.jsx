const NoteList = ({ notes }) => {
  console.log("Notes received:", notes);
  // Safety check
  if (!Array.isArray(notes) || notes.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No notes yet</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-6 space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white p-4 rounded-xl shadow border-l-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{note.title}</h3>
            <span className="text-sm text-gray-500">{note.category}</span>
          </div>

          <p className="text-gray-700 mt-2">{note.description}</p>

          <div className="text-xs text-gray-400 mt-2">
            Priority: {note.priority}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
