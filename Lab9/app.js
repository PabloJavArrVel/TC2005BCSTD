
const http = require('http');
const cake = "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg";
const hotcake = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/019865fa-e3d1-4e33-9bbd-72efa031ed40/Derivates/2c49f00e-8878-4b7c-a97a-2ec7342ac955.jpg";
const chilaquil = "https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg";
const server = http.createServer((request,response) => {
    console.log(request.url)
    if (request.url == '/cake'){
        response.write("<!DOCTYPE html>")
        response.write("<html>")
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<img src='" + cake + "'/>");
        response.write("</body></html>");
        response.end();
    }
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