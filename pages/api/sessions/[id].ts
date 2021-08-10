import Recording from '../../../backend/models/recording';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    await _delete(req, res);
  }
}

async function _delete(req, res) {
  const {id} = req.query;
  const recording = await Recording.findById(id);
  recording.remove();
  res.end();
}
