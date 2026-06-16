
const http = require("http");
const requestHandeler = require("./routes");

const app = http.createServer(requestHandeler);

const port = 3000;
app.listen(port,()=>{
  console.log("server is running on", port);
})