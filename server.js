const express = require('express');

const server = express();

const projectRouter = require('./data/projects/projectRouter.js')

server.use(express.json());
server.use('/projects', projectRouter)
server.use(logger)

server.get('/', (req,res) => {
    res.send('<h1>helloo</h1>')
})

function logger(req, res, next) {
    console.log(` Request method: ${req.method} Request url: ${req.originalUrl} timestamp: ${Date.now()}`);
    next();
  };



module.exports = server;