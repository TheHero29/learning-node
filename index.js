const express = require('express');
const app = express();
const port = 2024;
// const logger = require('./Logger/Logger')
app.use(express.json());
const Logger = (req,res,next) => {
    const method = req.method;
    let ip = req.ip;
    if(!ip)
        ip = req.headers['x-forwarded-for']
    const hostname = req.hostname;
    const date = new Date().toISOString();
    // const date = req.date;
    console.log(`method:69 | IP:${ip} | hostname:${hostname} | date:${date}`);
    next();
} 
app.use(Logger);
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
    //updating the course
    course.name = req.body.name;
    // const index = courses.indexOf(course);
    // courses[index] = course;
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