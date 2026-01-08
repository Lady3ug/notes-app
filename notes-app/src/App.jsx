import NoteForm from "./components/NoteForm";
import { useState } from "react";
import NoteList from "./components/Notelist";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-200 flex flex-col items-center justify-start p-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg">
        📝 Notes App
      </h1>

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8">
        <NoteForm notes={notes} setNotes={setNotes} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default App;
