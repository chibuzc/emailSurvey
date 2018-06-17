const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema ({
    email: String,
    clicked: { type: Boolean, default: false }
})

module.exports = recipientSchema