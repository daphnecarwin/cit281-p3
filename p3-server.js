import {countCoint} from './p3-module.js';
const fastify = require("fastify")();
const fs = require('fs');


 fs.readFile(`${__dirname}/index.html`,(err, data)=>{
    if(err){
    console.log(err);
    res.statusCode=500;
    res.setHeader('Content-Type','text/html');
    res.end("Error processing request");
    } else {
    res.statusCode=200;
    console.log("URL:",req.url);
    res.setHeader('Content-Type','text/html');
    res.write(data);
    res.end();
    }
});
const listenIP = 'localhost';
const listenPort= 8080;
fastify.listen(listenPort, listenIP,(err, addresss)=>{
    console.log(`server on ${listenPort} and ${listenIP}`);
});

fastify.get("/coin",(request,reply)=>{
    const {denom = 0, count=0} = request.params;
    let response = request.params;
    reply
    .code(200)
    .header("Content-Type","text/html;charset=utf-8")
    .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

fastify.get("/coins",(request,reply)=>{
    const {options} = request.params;
    switch(options){
        case 1: coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }) 
            break;
        case 2: coinCount(...coins)
            break; 
        case 3: coinCount(coins)
            break;
        default:
            return 0;    
    }
    let response = request.params;
    reply
    .code(200)
    .header("Content-Type","text/html;charset=utf-8")
    .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});