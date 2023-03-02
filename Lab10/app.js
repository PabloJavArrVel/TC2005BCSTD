//Francisco Couttolenc Ortiz - A01754959
//Pablo Javier Arreola Velasco - A01747824



const http = require('http');
const fs = require('fs');
const cake = "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg";
const hotcake = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/019865fa-e3d1-4e33-9bbd-72efa031ed40/Derivates/2c49f00e-8878-4b7c-a97a-2ec7342ac955.jpg";
const chilaquil = "https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg";
const server = http.createServer((request,response) => {
    console.log(request.url)
    if (request.url == '/cake'){

        if (request.method === 'GET') {
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write("<head><meta charset='utf-8'></head><body>");
            response.write("<h1>Te gusta el pastel?</h1>");
            response.write("<img src='" + cake + "'/>");
            response.write("<form method='POST' action='/cake'>");
            response.write("<input type='checkbox' name='likeCake' value='Si'> Si, me gusta el pastel<br>");
            response.write("<input type='checkbox' name='likeCake' value='no'> No, me gusta el pastel<br>");
            response.write("<button type='submit'>Enviar</button>");
            response.write("</form>");
            response.write("</body></html>");
            response.end();
        } else if (request.method === 'POST') {
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
                    response.setHeader('Location', '/cake');
                    response.end();
                });
            });
    } }
    else if (request.url == '/hotcake') {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>")
        response.write("<html>")
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<img src='" + hotcake + "'/>");
        response.write("</body></html>");
        response.end();
    }
    else if (request.url == '/chilaquiles') {
        response.write("<!DOCTYPE html>")
        response.write("<html>")
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<img src='" + chilaquil + "'/>");
        response.write("</body></html>");
        response.end();
    }
    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Acá no hay nada</h1>");
        response.write("</body></html>");
        response.end();
    }
});

server.listen(3000);