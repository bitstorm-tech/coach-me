import PrimaryButton from './buttons/PrimaryButton';

export default function Modal({children, visible, onClose, onSave, title}) {
  if (!visible) {
    return null;
  }

  return (
    <div className="flex absolute top-0 left-0 justify-center items-center w-screen h-screen backdrop-filter backdrop-blur">
      <div className="flex flex-col mx-auto w-11/12 max-w-2xl rounded-md border border-accent sm:w-5/6 lg:w-1/2">
        <div className="flex flex-row justify-between p-6 text-primary bg-darkest rounded-t-md">
          <p className="font-bold">{title}</p>
          <svg className="w-6 h-6 cursor-pointer hover:text-accent hover-transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="p-5 bg-darker">
          {children}
        </div>
        <div className="flex flex-row justify-between items-center p-5 bg-darkest rounded-b-md">
          <PrimaryButton onClick={onClose} border={false}>
            Cancel
          </PrimaryButton>
          <PrimaryButton onClick={onSave}>
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
