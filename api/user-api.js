const crypto = require('crypto');
const User = require('../models/user');

module.exports.createUser = (userData) => {
    return new User({
        username: userData.username,
        password: hash(userData.password),
        first_name: userData.first_name,
        last_name: userData.last_name,
        role: userData.role
    }).save();
}

module.exports.getUser = (id) => {
    return User.findOne(id);
}

function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64')
}