import { model, models, Schema, Types } from 'mongoose';

const userSchema = new Schema({
  nickname: {type: String, required: true},
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  sessions: [{
    name: {type: String, required: true, unique: true},
    description: {type: String},
    recordings: [{type: Types.ObjectId, required: true}]
  }]
});

const User = models.User || model('User', userSchema);
export default User;
