const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/courses', (req, res) => res.render('courses'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(PORT, () => {
    console.log(`Bootcamp site running at http://localhost:${PORT}`);
});