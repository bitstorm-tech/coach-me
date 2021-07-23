import NewSessionModal from './NewSessionModal';
import { useState } from 'react';

export default function SessionRow({ session }) {
  const [showModal, setShowModal] = useState(false);

  function renderNewSessionButton() {
    return (
      <div
        onClick={() => setShowModal(true)}
        className="flex flex-col justify-center items-center w-48 h-48 rounded-xl cursor-pointer text-accent bg-dark hover-transition hover:shadow-inner-glow"
      >
        <span>New Session</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center h-52 rounded bg-darker">
        {!session && renderNewSessionButton()}
      </div>
      <NewSessionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
