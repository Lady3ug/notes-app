const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 font-medium mb-2">
        {label}
      </label>
      <select
        name={name}
        className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
