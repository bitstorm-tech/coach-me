import { useState } from 'react';

export default function Select({label, options=[], placeholder='', onChange=()=>{}}) {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  function close() {
    setOpen(false);
  }

  function select(option) {
    setSelected(option);
    setOpen(false);
  }

  function open() {
    setOpen(true);
  }

  function change(text) {
    setSelected(text);
    onChange(text);
    setFilteredOptions(
      options.filter(option => option.toLowerCase().includes(text.toLowerCase()))
    );
  }

  return (
    <div className="flex flex-col">
      <label className="pl-1">{label}</label>
      <div className="flex flex-col">
        <input onClick={open} placeholder={placeholder} value={selected.length > 0 ? selected : undefined} onChange={event => change(event.target.value)}
               className="p-2 bg-white rounded text-sm border focus:bg-gray-100 w-full outline-none focus:outline-none focus:bg-gray-100"/>
        <div className="absolute bg-white mt-12 border rounded">
          {isOpen && filteredOptions.map((option, i) =>
            <div key={i} onClick={() => select(option)} className="bg-gray-50 my-1 px-4 cursor-pointer">
              {option}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
