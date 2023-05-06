const cake = "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg";
const hotcake = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/019865fa-e3d1-4e33-9bbd-72efa031ed40/Derivates/2c49f00e-8878-4b7c-a97a-2ec7342ac955.jpg";
const chilaquil = "https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg";

const express = require('express');
const router = express.Router();

const http = require('http');
const fs = require('fs');


router.get('/hotcake', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<!DOCTYPE html>")
    response.write("<html>")
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<img src='" + hotcake + "'/>");
    response.write("</body></html>");
    response.end();
});

router.get('/chilaquiles', (request, response) => {
        response.write("<!DOCTYPE html>")
        response.write("<html>")
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<img src='" + chilaquil + "'/>");
        response.write("</body></html>");
        response.end();
});

router.get('/cake', (request, response) => {
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head><meta charset='utf-8'></head><body>");
        response.write("<h1>Te gusta el pastel?</h1>");
        response.write("<img src='" + cake + "'/>");
        response.write("<form method='POST' action='./cake'>");
        response.write("<input type='checkbox' name='likeCake' value='Si'> Si, me gusta el pastel<br>");
        response.write("<input type='checkbox' name='likeCake' value='no'> No, me gusta el pastel<br>");
        response.write("<button type='submit'>Enviar</button>");
        response.write("</form>");
        response.write("</body></html>");
        response.end();
});

router.post('/cake', (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk.toString();
    });
    request.on('end', () => {
        const likeCake = data.split('=')[1]; 
        fs.appendFile('cakeResponses.txt', `${likeCake}\n`, err => { 
            if (err) throw err;
            console.log('Data written to file');
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 302; 
            response.setHeader('Location', './cake');
            response.end();
        });
    });
});




module.exports = router;