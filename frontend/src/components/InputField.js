const InputField = ({ label, type, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default InputField;
