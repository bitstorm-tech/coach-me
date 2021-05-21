import Modal from '../../ui/Modal';
import { useTranslation } from 'next-i18next';
import Input from '../../ui/Input';
import Select from '../../ui/Select';

export default function NewSessionModal({visible, onClose, onSave}) {
  const {t} = useTranslation('sessions');
  const gameOptions = ['League of Legends', 'StarCraft II', 'Hearthstone', 'World of Tanks', 'World of Warcraft', 'Dota 2'].sort((a, b) => a.localeCompare(b));

  return (
    <Modal title={t('new-session-modal-title')} visible={visible} onClose={onClose} onSave={() => onSave(recording)}>
        <div className="flex flex-col justify-between space-y-2">
          <div className="flex space-x-2">
            <Input label="Name"/>
            <div className="w-72">
              <Select label="Game" placeholder="Select Game" options={gameOptions}/>
            </div>
          </div>
          <Input label="Description"/>
        </div>
    </Modal>
  );
}
