import { useState } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import CloseCross from './CloseCross';

export default function Modal({ children, onClose, title, buttons }) {
  return (
    <div className="flex absolute top-0 left-0 justify-center items-center w-screen h-screen backdrop-filter backdrop-blur">
      <div className="flex flex-col mx-auto w-11/12 max-w-2xl rounded-md border border-accent sm:w-5/6 lg:w-1/2">
        <div className="flex flex-row justify-between p-6 text-primary bg-darkest rounded-t-md">
          <p className="font-bold">{title}</p>
          <CloseCross onClick={onClose} />
        </div>
        <div className="p-5 bg-darker">{children}</div>
        <div className="flex flex-row justify-between items-center p-5 bg-darkest rounded-b-md">
          <PrimaryButton onClick={onClose} border={false}>
            Cancel
          </PrimaryButton>
          <div className="space-x-2">{buttons}</div>
        </div>
      </div>
    </div>
  );
}
