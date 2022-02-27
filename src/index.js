const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http')

const server = http.createServer(app);
const app = express(), path = require('path');

const taskRoutes = require('./routes/task.routes');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message : err.message
    })
});

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${app.get('port')}`);
});

app.get('/', (res, req)=>{
    res.send('Welcome')
})