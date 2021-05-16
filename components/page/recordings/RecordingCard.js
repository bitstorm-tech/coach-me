import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { useState } from 'react';
import DeleteButton from '../../ui/buttons/DeleteButton';
import Checkbox from '../../ui/Checkbox';

export default function RecordingCard({name, onDelete, editable = false}) {
  const [isEditable] = useState(editable);
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <div>
        <p className="text-xl font-semibold mb-2">{name}</p>
      </div>
      <div className="mb-2">
        <h1>Blocked Sites</h1>
        <hr/>
        <h1>Blocking Time</h1>
        <div className="flex flex-row space-x-4 py-1">
          <Checkbox text="Mo" />
          <Checkbox text="Di" />
          <Checkbox text="Mi" />
          <Checkbox text="Do" />
          <Checkbox text="Fr" />
          <Checkbox text="Sa" />
          <Checkbox text="So" />
        </div>
        <hr/>
        <h1>Motivation Claims</h1>
      </div>
      <div className="pt-4 flex flex-row-reverse space-x-reverse space-x-2">
        <DeleteButton onDelete={onDelete}/>
        <PrimaryButton>Edit</PrimaryButton>
      </div>
    </div>
  );
}
