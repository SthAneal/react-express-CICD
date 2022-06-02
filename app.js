const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/frontend/build')));

app.get('/api/name', (req, res)=>{
    res.send('Anil Shrestha + Mira Shresthaa');
});

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, './frontend/build','index.html'));
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
});