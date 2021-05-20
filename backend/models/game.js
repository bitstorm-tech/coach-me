import { model, models, Schema } from 'mongoose';

const gameSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String}
});

const Game = models.Game || model('Game', gameSchema);
export default Game;
