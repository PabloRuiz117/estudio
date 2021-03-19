const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const objetourl = url.parse(req.parse);
    let camino = 'static' + objetourl.pathname;
});
