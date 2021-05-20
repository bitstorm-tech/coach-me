export default function Input({label, onChange = () => {}, placeholder = '', type = 'text'}) {
  return (
    <div className="pt-0 mb-3 w-full">
      <label className="pl-1">{label}</label>
      <input type={type} placeholder={placeholder} onChange={event => onChange(event.target.value)}
             className="p-2 w-full text-sm bg-white rounded border shadow-inner outline-none focus:outline-none focus:bg-gray-100"/>
    </div>
  );
}
