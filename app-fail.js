const http = require("http");
const fs = require("fs");
const tagMaker = require("./tagMaker");
const attriMaker = require("./setattriMaker");
const render = require("./render.js");

const elementsData = [];
elementsData.push(tagMaker("div"));
elementsData.push(attriMaker("div", "id", "div-attri"));
const htmlData = render(elementsData.join(""));

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlData);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Not found");
    res.end();
  }
});
server.listen(3000);
