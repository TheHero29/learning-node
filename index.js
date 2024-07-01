const fs = require('fs');
const path = require('path');
// import 'index.html' as html;
const html = fs.readFileSync('index.html', 'utf8');

// console.log('File before:', data);

// fs.appendFileSync('file.txt', '!');

// console.log('File after :', fs.readFileSync('file.txt', 'utf8'));

// fs.mkdir('myDir',(err)=>
//     {
//         if(err) throw err;
//         console.log('Directory created')
//     }
// );

// fs.rm('./myDir',{ recursive: true, force: true },(err)=>{
//     if(err) throw err;
//     console.log('Directory removed')
// });

// fs.rename('file.txt','file2.txt',(err)=>{
//     if(err) throw err;
//     console.log('File renamed')
// });

// const p = '/home/loukik/Projects/learning-node/file2.txt';

// console.log(path.dirname(p),path.extname(p),path.basename(p));

// const src = '/home/loukik/Projects/learning-node/file2.txt';
// const dest = '/home/loukik/Projects/learning-node/myDir/file2.txt';

// fs.copyFile(src,dest,(err)=>{
//     if(err) throw err;
//     // console.log('File copied')
// });

// fs.unlink(src,(err)=>{
//     if(err) throw err;
//     console.log('File moved')
// })

const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>Express server</h1>');
})
const loginHtml = fs.readFileSync('login.html','utf8');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url === '/'){
    res.write(html);
    res.end();
    }
    else if(req.url === '/login'){
        res.write(loginHtml);
        res.end();}
});

// app.get('/login',(req,res)=>{
//     res.send('<h1>Login page</h1>');
// })
const port = 2525;

const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}`);
})