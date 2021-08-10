import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import connectToMongoDb from '../backend/mongodb';
import axios from 'axios';
import Recording from '../backend/models/recording';
import SessionRow from '../components/page/sessions/SessionRow';

function Sessions({recordingsFromDb}) {
  const {t} = useTranslation('sessions');
  const [recordings, setRecordings] = useState(recordingsFromDb);

  async function removeRecording(id) {
    await axios.delete(`/api/sessions/${id}`);
    setRecordings([...recordings.filter(recording => recording._id !== id)]);
  }

  async function addRecording(newRecording) {
    const response = await axios.post('/api/recordings', newRecording);
    setRecordings([...recordings, response.data]);
  }

  return (
    <div className="p-5">
      <div className="m-4">
        <SessionRow/>
      </div>
      <div className="m-4">
        <SessionRow/>
      </div>
      <div className="m-4">
        <SessionRow/>
      </div>
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
