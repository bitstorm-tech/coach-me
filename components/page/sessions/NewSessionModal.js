import Modal from '../../ui/Modal';
import { useTranslation } from 'next-i18next';
import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { useState } from 'react';
import ScreenRecorder from '../../../utils/ScreenRecorder';
import Checkbox from '../../ui/Checkbox';

export default function NewSessionModal({visible, onClose, onSave}) {
  const [recording, setRecording] = useState(false);
  const {t} = useTranslation('sessions');

  const startRecording = async () => {
    await ScreenRecorder.startRecording();
    setRecording(true);
  }

  const stopRecording = () => {
    ScreenRecorder.stopRecording();
    setRecording(false);
  }

  function onCloseInternal() {
    setRecording(false);
    onClose();
  }

  return (
    <Modal title={t('new-session-modal-title')} visible={visible} onClose={onCloseInternal} onSave={() => onSave(recording)}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-4">
            <PrimaryButton onClick={startRecording} disabled={recording}>
              {t('start-recording')}
            </PrimaryButton>
            <PrimaryButton onClick={stopRecording} disabled={!recording}>
              {t('stop-recording')}
            </PrimaryButton>
            <Checkbox>
              Save local
            </Checkbox>
          </div>
          <PrimaryButton>
            {t('upload-recording')}
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}
