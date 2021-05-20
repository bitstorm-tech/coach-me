import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import connectToMongoDb from '../backend/mongodb';
import axios from 'axios';
import Recording from '../backend/models/recording';
import NewSessionModal from '../components/page/sessions/NewSessionModal';
import SessionRow from '../components/page/sessions/SessionRow';

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
      {/*<div className="flex flex-row justify-center mb-5 space-x-4">*/}
      {/*  <PrimaryButton onClick={openModal}>*/}
      {/*    {t('new-session')}*/}
      {/*  </PrimaryButton>*/}
      {/*</div>*/}
      {/*<div className="flex flex-row flex-wrap justify-center space-x-4">*/}
      {/*  {recordings && recordings.map(recording =>*/}
      {/*    <div key={recording._id} className="m-3 lg:w-5/12">*/}
      {/*      <SessionCard name={recording.name} onDelete={() => removeRecording(recording._id)}/>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className="m-4">
        <SessionRow/>
      </div>
      <div className="m-4">
        <SessionRow/>
      </div>
      <div className="m-4">
        <SessionRow/>
      </div>
      <NewSessionModal visible={showModal} onClose={closeModal}/>
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
