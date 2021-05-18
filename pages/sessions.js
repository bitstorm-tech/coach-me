import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { useTranslation } from 'next-i18next';
import SessionCard from '../components/page/sessions/SessionCard';
import { useState } from 'react';
import NewSessionModal from '../components/page/sessions/NewSessionModal';
import connectToMongoDb from '../backend/mongodb';
import axios from 'axios';
import Recording from '../backend/models/recording';

function Sessions({recordingsFromDb}) {
  const {t} = useTranslation('sessions');
  const [recordings, setRecordings] = useState(recordingsFromDb);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  async function removeRecording(id) {
    await axios.delete(`/api/sessions/${id}`);
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
          {t('new-session')}
        </PrimaryButton>
      </div>
      <div className="flex flex-row space-x-4 justify-center flex-wrap">
        {recordings && recordings.map(recording =>
          <div key={recording._id} className="m-3 lg:w-5/12">
            <SessionCard name={recording.name} onDelete={() => removeRecording(recording._id)}/>
          </div>
        )}
      </div>
      <NewSessionModal visible={showModal} onClose={closeModal} onSave={addRecording}/>
    </div>
  );
}

export default withPageAuthRequired(Sessions);

export async function getServerSideProps({locale}) {
  await connectToMongoDb();
  const recordings = await Recording.find();
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'sessions']),
      guardiansFromDb: JSON.parse(JSON.stringify(recordings))
    }
  };
}
