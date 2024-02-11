const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  if (req.url === '/battery') {
    getBatteryTemperature(res);
  } else {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    fs.exists(filePath, (exists) => {
      if (exists) {
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      }
    });
  }
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
