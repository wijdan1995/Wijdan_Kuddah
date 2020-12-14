const express = require("express");
// const cors = require("cors");
const app = express();
const port = 8001;
// app.use(cors());
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = require("socket.io")(server, {
    cors:{
        origin: 'http://localhost:3001',
        methods: ["GET", "POST"],
    }
})

io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)")
    // socket.on("event_from_client", data => {
    //     socket.broadcast.emit("send_data_to_all_other_clients", data)
    // })
    io.emit('Welcome', 'Welcome to Socket.io')
})