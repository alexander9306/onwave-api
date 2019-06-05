const mongoose = require('mongoose');
const rolesSchema = new mongoose.Schema({
    value: {
        type: String
    },
    type: {
        type: String
    }
}, { versionKey: false })
const Roles = mongoose.model('Roles', rolesSchema);
module.exports = Roles;