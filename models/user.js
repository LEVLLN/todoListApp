const mongoose = require('mongoose');
const mongooseRole = require('mongoose-role');
const connection = require('../libs/mongoose');
const crypto = require('crypto')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: String,
    last_name: String
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

module.exports = User;
