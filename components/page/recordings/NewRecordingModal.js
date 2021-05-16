import Modal from '../../ui/Modal';
import { useTranslation } from 'next-i18next';
import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { useState } from 'react';
import { saveAs } from 'file-saver';

const recordingMimeType = 'video/webm; codecs=vp9';

export default function NewRecordingModal({visible, onClose, onSave}) {
  const [recording, setRecording] = useState(false);
  let isRecording = false;
  const {t} = useTranslation('recordings');
  const recordingChunks = [];
  let mediaRecorder;

  async function startRecording() {
    await setRecording(true);
    isRecording = !isRecording;
    const displayStream = await navigator.mediaDevices.getDisplayMedia({video: true, audio: true});
    const stream = new MediaStream(displayStream.getTracks());
    mediaRecorder = new MediaRecorder(stream, {mimeType: recordingMimeType});

    mediaRecorder.ondataavailable = function (event) {
      recordingChunks.push(event.data);
      if (!isRecording) {
        mediaRecorder.stop();
      }
    };

    mediaRecorder.onstop = function() {
      const blob = new Blob(recordingChunks, {type: recordingMimeType});
      saveAs(blob, createFilename());
    };

    mediaRecorder.start(250);
  }

  async function stopRecording() {
    setRecording(false);
    isRecording = !isRecording;
  }

  function onCloseInternal() {
    setRecording(false);
    onClose();
  }

  function createFilename() {
    const now = new Date();
    const formattedDateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}_${now.getMinutes()}`;
    return `coach-me-${formattedDateTime}.webm`;
  }

  return (
    <Modal title={t('modal-title')} visible={visible} onClose={onCloseInternal} onSave={() => onSave(recording)}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-4">
            <PrimaryButton onClick={() => startRecording()} disabled={recording}>
              {t('start-recording')}
            </PrimaryButton>
            <PrimaryButton onClick={() => stopRecording()} disabled={!recording}>
              {t('stop-recording')}
            </PrimaryButton>
          </div>
          <PrimaryButton>
            {t('upload-recording')}
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}
