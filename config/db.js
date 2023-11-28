// getting-started.js
const mongoose = require('mongoose');

const connectDB = async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/uaskk4');
    console.log('Database Terhubung')
}

module.exports = connectDB