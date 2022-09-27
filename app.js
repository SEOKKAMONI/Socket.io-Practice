const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io")

const io = socketIO(server);


app.use(express.static(path.join(__dirname, "src"))) // use 보여줄 폴더 지정
// __dirname 은 내가 가지고 있는 프로젝트 폴더를 가르키고있음
// path join 은 쓰는 이유는 운영체제마다 경로를 지정할때 쓰는 역슬래쉬 가 다르기 때문이다

const PORT = process.env.PORT || 5000; // 프로세스 환경에 포트가 지정되어있으면 그 포트를 사용하고 아니면 5000번 포트를 사용한다

io.on("connection", (socket) => { // server 에서 받아주는 코드
    socket.on("chatting", (data) => {
        console.log(data) // 클라이언트에서 온 데이터 출력
        io.emit("chatting", `그래 반가워 ${data}`) // 서버에서 클라이언트로 보내주기
    })
})

server.listen(PORT, () => console.log(`server is running ${PORT}`)) // app.listen(포트, 실행할 명령);