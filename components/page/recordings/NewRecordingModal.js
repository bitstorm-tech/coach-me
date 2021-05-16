import Modal from '../../ui/Modal';
import Input from '../../ui/Input';
import { useTranslation } from 'next-i18next';
import PrimaryButton from '../../ui/buttons/PrimaryButton';

export default function NewRecordingModal({visible, onClose, onSave}) {
  const {t} = useTranslation('recordings');
  const recording = {
    name: ''
  };

  return (
    <Modal title="Create new Time Guardian" visible={visible} onClose={onClose} onSave={() => onSave(recording)}>
      <PrimaryButton>{t('start-recording')}</PrimaryButton>
      <Input type="text" label="Name" onChange={name => recording.name = name}/>
    </Modal>
  )
}
