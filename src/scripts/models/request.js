const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;