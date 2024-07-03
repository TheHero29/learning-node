const express = require('express');
const app = express();
const port = 2024;

let courses = [
    {
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    }
];
app.get('/', (req, res) => {

    res.send('Hello World');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});