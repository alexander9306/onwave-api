const mongoose = require('mongoose');
const CondominiumSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    latitude: {
        type: mongoose.Decimal128
    },
    longitude: {
        type: mongoose.Decimal128
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    }
}, { versionKey: false })
const Condominium = mongoose.model('Condominium', CondominiumSchema);
module.exports = Condominium;