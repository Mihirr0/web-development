// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Rohan Das');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          * {
              box-sizing: border-box;
              /* margin: 0; */
          }
  
          .container {
              color: rgb(25, 25, 139);
              background-color: rgb(208, 219, 240);
              border: 3px solid darkslateblue;
              /* margin: 33px 40px; */
              width: 900px;
              padding: 20px 20px;
          }
  
          .maal {
              border: 3px solid darkslateblue;
              margin: 30px auto;
              padding: 15px 5px;
              /* width: 200px; */
              background-color: gainsboro;
              padding-right: 20px;
  
          }
  
          .item {
              padding-left: 80px;
          }
  
          h1 {
              padding-left: 269px;
              width: 455px;
          }
  
          #one {
              float: left;
              width: 48%;
          }
  
          #two {
              float: right;
              width: 48%;
          }
  
          #three {
              clear: both;
              clear: left;
              width: 100%;
          }
  
          h3 {
              text-align: justify;
              
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h1>THIS IS MY SHOP</h1>
          <div id="one" class="maal">
              <h3 class="item">airpods</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur. In porro hic commodi,
                  iste natus possimus dignissimos sapiente mollitia ad? Necessitatibus facilis dolore eaque nulla voluptas
                  hic ullam quae.</p>
          </div>
          <div id="two" class="maal">
              <h3 class="item">headphones</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur. In porro hic commodi,
                  iste natus possimus dignissimos sapiente mollitia ad? Necessitatibus facilis dolore eaque nulla voluptas
                  hic ullam quae.</p>
          </div>
          <div id="three" class="maal">
              <h3 class="item">leads</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur. In porro hic commodi,
                  iste natus possimus dignissimos sapiente mollitia ad? Necessitatibus facilis dolore eaque nulla voluptas
                  hic ullam quae.</p>
          </div>
  
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

