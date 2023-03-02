const overwatch = "https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/tt/TT04L5SWOK0P1613608468021.png";
const hijosdelbosque = "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=1677179639";

const express = require('express');
const router = express.Router();


router.get('/overwatch', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<!DOCTYPE html>")
    response.write("<html>")
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<img src='" + overwatch + "'/>");
    response.write("</body></html>");
    response.end(); 
});

router.get('/hijosdelbosque', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<!DOCTYPE html>")
    response.write("<html>")
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<img src='" + hijosdelbosque + "'/>");
    response.write("</body></html>");
    response.end(); 
});

module.exports = router;