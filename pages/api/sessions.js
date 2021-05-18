import Recording from '../../backend/models/recording';

export default async function handler(req, res) {
  const newRecording = await new Recording(req.body).save();
  res.send(newRecording);
}
