import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { useTranslation } from 'next-i18next';
import RecordingCard from '../components/page/recordings/RecordingCard';
import { useState } from 'react';
import NewRecordingModal from '../components/page/recordings/NewRecordingModal';
import connectToMongoDb from '../backend/mongodb';
import axios from 'axios';
import Recording from '../backend/models/recording';

function Recordings({recordingsFromDb}) {
  const {t} = useTranslation('recordings');
  const [recordings, setRecordings] = useState(recordingsFromDb);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  async function removeRecording(id) {
    await axios.delete(`/api/recordings/${id}`);
    setRecordings([...recordings.filter(recording => recording._id !== id)]);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function addRecording(newRecording) {
    const response = await axios.post('/api/recordings', newRecording);
    setRecordings([...recordings, response.data]);
    closeModal();
  }

  return (
    <div className="p-5">
      <div className="flex flex-row justify-center space-x-4 mb-5">
        <PrimaryButton onClick={openModal}>
          {t('new-recording')}
        </PrimaryButton>
      </div>
      <div className="flex flex-row space-x-4 justify-center flex-wrap">
        {recordings.map(recording =>
          <div key={recording._id} className="m-3 lg:w-5/12">
            <RecordingCard name={recording.name} onDelete={() => removeRecording(recording._id)}/>
          </div>
        )}
      </div>
      <NewRecordingModal visible={showModal} onClose={closeModal} onSave={addRecording}/>
    </div>
  );
}

export default withPageAuthRequired(Recordings);

export async function getServerSideProps({locale}) {
  await connectToMongoDb();
  const recordings = await Recording.find();
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'recordings']),
      guardiansFromDb: JSON.parse(JSON.stringify(recordings))
    }
  };
}
