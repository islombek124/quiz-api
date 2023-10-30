const express = require("express")
const router = express.Router()
const quiz = require("../controller/quiz")

router.get('/quizzes', quiz.getAllQuizzes)
router.post('/quizzes', quiz.addQuiz)

module.exports = router;
