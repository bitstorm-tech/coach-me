import { connect } from 'mongoose';

const connectionUri = process.env.MONGODB_CONNECTION_URI;

export default async function connectToMongoDb() {
  if (!global.isDbConnected) {
    await connect(connectionUri, {useNewUrlParser: true, useUnifiedTopology: true});
    global.isDbConnected = true;
  }
}
