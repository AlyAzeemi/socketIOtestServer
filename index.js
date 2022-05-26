const { Server } = require("socket.io");

const io = new Server({});
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("transaction", (args) => {
    socket.broadcast.emit("transaction", args);
  });
});

io.listen(process.env.socketIOPort);
