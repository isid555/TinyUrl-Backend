const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    clicks: { type: Number, default: 0 },
});
module.exports = mongoose.model('URL', urlSchema);