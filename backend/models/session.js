import { model, models, Schema } from 'mongoose';

const sessionSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String}
});

const Session = models.Session || model('Session', sessionSchema);
export default Session;
