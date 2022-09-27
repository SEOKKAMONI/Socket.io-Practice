"use strict"
const socket = io();

socket.emit("chatting", "from fornt") // ("채널아이디" , "보낼거")

socket.on("chatting", (data) => { // server 에서 보낸 내용 받기
    console.log(data) // server 에서 보낸 내용 출력
})

console.log(socket)