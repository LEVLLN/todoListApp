const mongoDBHost = 'localhost';
const mongoDBPort = 27017;
const mongoDBName = 'todolist';
const mongoDBURL = `mongodb://${mongoDBHost}:${mongoDBPort}/${mongoDBName}`;
const connection = { mongoDBURL };
module.exports.connection = connection;
