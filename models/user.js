const mongoose = require('mongoose');
const mongooseRole = require('mongoose-role');
const config = require('../libs/config');
mongoose.connect(config.connection.mongoDBURL);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'MongoDB connection error'));
console.log(`Connected to ${config.connection.mongoDBURL}`);

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: String,
    first_name: String,
    last_name: String,
    hashed_password: String,
    salt: String
});

UserSchema.plugin(mongooseRole, {
    roles: ['public', 'user', 'admin'],
    accessLevels: {
        'public': ['public', 'user', 'admin'],
        'anon': ['public'],
        'user': ['user', 'admin'],
        'admin': ['admin']
    }
});

const User = mongoose.model('User', UserSchema);

let newUser = new User({ email: 'email@email.com', first_name: 'alex', last_name: 'gosha', role: 'user' });

User.find({}, function (err, docs) {
    if (!err) {
        console.log(docs);
        console.log(newUser.hasAccess('admin'));
        process.exit();
    }
    else { throw err; }
});
// newUser.save(function (err) {
//     if (err) return handleError(err);

// });
// User.findByIdAndRemove('5ac51e390aa4bd73fa2afde8',(err,todo)=>{

// })

module.exports = User;
