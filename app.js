const http = require("http");

let logs = [];

const server = http.createServer((req, res) => {
  const log = {
    ip: req.socket.remoteAddress,
    url: req.url,
    time: new Date()
  };

  logs.push(log);

  // Simple detection logic
  const suspicious = logs.filter(l => l.ip === log.ip);

  if (suspicious.length > 5) {
    console.log("⚠️ Suspicious activity detected:", log.ip);
  }

  res.end("Request logged 🚀");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});