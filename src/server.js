const express = require('express');
const app = express();
const port = 3000;

//käsittelee json-dataa
app.use(express.json());


app.use(express.urlencoded({ extended: true}));

const questions = [
    { id: 1, question: 'Paljonko on 2+26?', answer: '28'},
    { id: 2, question: 'Paljonko on 6+74?', answer: '81'},

];


//haetaan kaikki kysymykset
app.get('/questions', (req, res) => {
    res.json(questions);
});

//lisätään uusi kysymys
app.post('/questions', (req, res) => {
    const { question, answer } = req.body;
    const newQuestion = {id: questions.length + 1, question, answer};
    questions.push(newQuestion);
    res.json(newQuestion);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})