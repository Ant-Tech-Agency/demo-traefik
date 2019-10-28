const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io").listen(server)
const os = require("os")
const redis = require("socket.io-redis")

// io.adapter(redis({ host: "localhost", port: 6379 }))

app.use(cors())

app.get("/", (req, res) => res.send(os.hostname()))

app.get("/news", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

io.on("connection", function(socket) {
  socket.emit("news", { msg: os.hostname() })
  // socket.on("kkk", function(data) {
  //   console.log(data)
  // })
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
