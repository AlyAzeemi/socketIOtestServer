import { io } from "socket.io-client";
const socket = io(`ws://localhost:${process.env.socketIOPort}`);

socket.on("transaction", (txHash) => {
  console.log("Client updated with: ", txHash);
});
