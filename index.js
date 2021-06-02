const express = require('express')
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

const feedbackRouter = require('./routes/feedback')
app.use('/website-feedback', feedbackRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at 3000");
})