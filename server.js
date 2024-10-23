const http = require("http"),
  Request = require("./core/request.js"),
  App = require("./public/app.js");

const server = http.createServer((req, res) => {
  const request = new Request();
  request.setRequest(req);

  const app = new App();
  const response = app.run();
console.log(app.run());
  res.statusCode = response.getStatusCode();
  res.setHeader("content-type", response.getHttpHeader());
  res.end(response.getData());
});

server.listen(5000, "localhost", (err) => {
  if (err) throw err;
  console.log("[+] Server listening on port 5000");
});
