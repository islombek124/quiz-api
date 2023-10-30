const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  choices: {
    type: Array,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('quiz', quizSchema)
