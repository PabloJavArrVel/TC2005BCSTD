console.log("Hola desde node");
console.log("Hola desde npm");

const express = require('express');
const app = express();

app.use((request,response,next) => {
    console.log("Middleware");
    next();
});

app.use((request,response,next) => {
    console.log("Otro Middleware");
    response.send("¡Hola mundo!");
});

app.listen(3000);