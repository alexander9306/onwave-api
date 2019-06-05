const mongoose = require('mongoose');
const state = ['active', 'awaiting activation', 'disabled']
const UsersSchema = new mongoose.Schema({
    roleId: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    state: {
        type: String,
        default: state[2]
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    documentId: {
        type: String
    },
    document: {
        type: String
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    }
}, { versionKey: false })
const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;