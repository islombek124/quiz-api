const Quiz = require("../models/quiz")

module.exports.getAllQuizzes = async (req, res) => {
  Quiz.find()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((err) => console.log(err));
}

module.exports.addQuiz = async (req, res) => {
  const { question, choices, answer } = req.body;

  const newQuiz = Quiz.create({
    question: question,
    choices: choices,
    answer: answer
  });

  (await newQuiz).save()
  res.status(200).redirect("/quizzes");
}
