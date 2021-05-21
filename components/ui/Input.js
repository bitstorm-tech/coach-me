export default function Input({label, onChange = () => {}, placeholder = '', type = 'text'}) {
  return (
    <div className="w-full">
      <label className="pl-1 text-primary text-xs">{label}</label>
      <input type={type} placeholder={placeholder} onChange={event => onChange(event.target.value)}
             className="p-2 w-full rounded shadow-inner outline-none bg-dark focus:shadow-inner-glow-s text-primary shadow-inner"/>
    </div>
  );
}
