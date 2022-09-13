const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://vthanhd:6B4f4t24WTvhcNJa@cluster0.chyhi71.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('Connected to Database'))
// .catch((err) => console.log('mongo connection error'));

// m8ESJzE7RX1rRIi6

mongoose.connect('mongodb+srv://vthanhd:m8ESJzE7RX1rRIi6@cluster0.chyhi71.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const dataSchema = new mongoose.Schema({
  // clientInitials: {type: String, required: true },
  date: { type: String, required: true },
  behavior: { type: String, require: true },
  antecedent: { type: String, require: true },
  consequence: { type: String, require: true },
  settingEvents: { type: String }
});

const Instance = mongoose.model('Instance', dataSchema);

module.exports = Instance;



