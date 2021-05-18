import PrimaryButton from './buttons/PrimaryButton';

export default function Modal({children, visible, onClose, onSave, title}) {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 flex justify-center h-screen w-screen items-center backdrop-filter backdrop-blur">
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-bold text-gray-800">{title}</p>
          <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="p-5 bg-white">
          {children}
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p className="font-semibold text-gray-600 cursor-pointer" onClick={onClose}>Cancel</p>
          <PrimaryButton onClick={onSave}>
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
