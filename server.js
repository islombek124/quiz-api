require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const quizRoutes = require("./routes/quiz")

// app
const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(quizRoutes)

// port
const port = process.env.PORT || 3000;

// connect database
mongoose.set('strictQuery', false)
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URL)
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1)
	}
}

connectDB().then(() => {
	app.listen(port, () => {
		console.log(`Listening on port: ${port}`);
	})
})
