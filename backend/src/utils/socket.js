const socket = require('socket.io');
const crypto = require("crypto");

const getSecretRoomId = (userId, targetUserId) => {
  return crypto
    .createHash("sha256")
    .update([userId, targetUserId].sort().join("$"))
    .digest("hex");
};

const initializeSocket = (server) => {
    const io = socket(server, {
        cors: {
            origin: "http://localhost:5173",
        },
    });

    io.on("connection", (socket) => {

        socket.on("joinChat", ({firstName, userId, targetUserId}) => {
          const roomId = getSecretRoomId(userId, targetUserId);
          
          console.log(firstName + "joined room :" + roomId);
          socket.join(roomId);
        })

        socket.on(
          "sendMessage",
          ({ firstName, lastName, userId, targetUserId, text, time }) => {
            const roomId = getSecretRoomId(userId, targetUserId);
            io.to(roomId).emit("messageReceived", {
              firstName,
              lastName,
              userId,
              text,
              time,
            });
          }
        );
          

        socket.on("typing", ({ userId, targetUserId, isTyping, firstName }) => {
          const roomId = getSecretRoomId(userId, targetUserId);
          socket.to(roomId).emit("typing", { isTyping, firstName });
        });
          
          
        socket.on("disconnect", () => {

        })
    })
}

module.exports = initializeSocket;