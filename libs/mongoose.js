const mongoose = require('mongoose');
const config = require('./config');


mongoose.connect(config.connection.mongoDBURL);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'MongoDB connection error'));
console.log(`Connected to ${config.connection.mongoDBURL}`);
return db;
module.exports = mongoose;