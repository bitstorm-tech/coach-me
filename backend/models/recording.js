import { model, models, Schema } from 'mongoose';

const recordingSchema = new Schema({
  name: {type: String, required: true}
});

const Recording = models.Recording || model('Recording', recordingSchema);
export default Recording;
