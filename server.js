const http = require('http');
const fs = require('fs');

class Server {
  constructor(port = 3000) {
    this._port = port;
    this._createServer();
  }

  start() {
    this._server.listen(this._port);
  }

  _createServer() {
    const serverLogic = this._getServerLogic();
    this._server = http.createServer(serverLogic);
  }

  _getServerLogic() {
    const serverLogic = (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');

      if (this._isRequestingModuleFile(req.url)) {
        res.setHeader('Content-Type', 'application/javascript');
      }

      const file = this._getFile(req.url);
      res.write(file);

      res.end();
    };

    return serverLogic;
  }

  _isRequestingModuleFile(url) {
    return /\.mjs$/.test(url);
  }

  _getFilePath(url) {
    return (url === '/') ? './index.html' : `.${url}`;
  }

  _getFile(reqUrl) {
    const filePath = this._getFilePath(reqUrl);
    let file;

    try {
      file = fs.readFileSync(filePath);
    } catch (err) {
      console.error(err);

      file = `
        <h1>404</h1>
        <h2>${reqUrl}</h2>
        <p>The requested file could not be found.</p>
      `;
    }

    return file;
  }
}

new Server().start();
