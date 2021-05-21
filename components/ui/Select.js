import { useEffect, useRef, useState } from 'react';

export default function Select({label, options=[], placeholder='', onChange=()=>{}}) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  function close(event) {
    if (ref.current && ref.current.contains(event.target)) {
      return;
    }
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
    <div ref={ref}>
      <label className="pl-1 text-primary text-xs">{label}</label>
        <div className="flex items-center relative">
          <input onClick={open} placeholder={placeholder} value={selected.length > 0 ? selected : undefined}
                 onChange={event => change(event.target.value)}
                 className="p-2 bg-dark rounded shadow-inner w-full outline-none focus:shadow-inner-glow-s text-primary pr-8"/>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary cursor-pointer absolute right-2"
               onClick={toggleOpen} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
          </svg>
        </div>
        {isOpen && <div className="absolute bg-dark mt-12 border rounded border-darkest">
          {filteredOptions.map((option, i) =>
            <div key={i} onClick={() => select(option)} className="my-1 px-4 cursor-pointer text-primary">
              {option}
            </div>
          )}
        </div>}
    </div>
  );
}
