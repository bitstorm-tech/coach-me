import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function DeleteButton({onDelete}) {
  const {t} = useTranslation('common');
  const [confirmation, setConfirmation] = useState(false);

  function toggleConfirmation() {
    setConfirmation(!confirmation);
  }

  function renderConfirmationButtons() {
    return (
      <div onClick={toggleConfirmation} className="flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" onClick={onDelete}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    );
  }

  return (
    <button className="bg-accent rounded-full focus:outline-none text-white px-2" onClick={toggleConfirmation}>
      {confirmation ? renderConfirmationButtons() : <div>{t('delete')}</div>}
    </button>
  );
}
