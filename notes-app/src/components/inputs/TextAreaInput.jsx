const TextAreaInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 font-medium mb-2">
        {label}
      </label>
      <textarea
        placeholder="Write your note..."
        name={name}
        className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 resize-none h-24"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAteaInput;
