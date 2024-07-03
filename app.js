const http = require('http');
const express = require('express');

const port = 2025

const app = express();

app.get('/ideas', (req, res) => {
    res.json([
        {
            "id": "1",
            "title": "my first idea",
            "text": "I will make a website for ideas",
            "img": "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category":["Technology","Start-up"],
            "stage":"nascent-idea"
          },
          {
            "id": "2",
            "title": "my second idea",
            "text": "I will start a custom-made guitar store",
            "img": "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fHww",
            "category":["Start-up","Music"],
            "stage":"nascent-idea"
          },
          {
            "id": "3",
            "title": "my third idea",
            "text": "I will start a better school",
            "img": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
            "category":["Start-up","Education"],
            "stage":"nascent-idea"
          } 
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});