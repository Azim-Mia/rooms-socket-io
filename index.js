const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const { Server }= require('socket.io');
//create socket Server
const io = new Server(expressServer);
//create rooms
io.on('connection',(socket)=>{
  socket.join('kichen_room')
  let roomSize= io.sockets.adapter.rooms.get('kichen_room').size;
  io.sockets.in('kichen_room').emit('kichen_room_connect', "Hi,Azim. Your are connect Kichen Room ="+roomSize);
  
  socket.join('bad_room')
  let badRoomSize= io.sockets.adapter.rooms.get('bad_room').size;
  io.sockets.in('bad_room').emit('bad_connect', "Azim1 is connected Bad room ="+badRoomSize)
})
app.get('/', (req,res)=>{
  res.sendFile(__dirname+"/index.html");
})
expressServer.listen(3000, ()=>{
  console.log("http://localhost:3000");
})