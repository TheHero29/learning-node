const express = require('express');
const app = express();
const port = 2024;

app.use(express.json());

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
app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    const index = courses.indexOf(course);
    //deleting the course
    courses.splice(index, 1);
    res.send(course);
});

app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    course.name = req.body.name;
    const index = courses.indexOf(course);
    //updating the course
    courses[index] = course;
    res.send(course);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});


app.post('/courses', (req, res) => {
    console.log(req.body);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});