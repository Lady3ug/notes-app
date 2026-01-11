const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 font-medium mb-2">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="text"
        placeholder="Enter note title"
        className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
