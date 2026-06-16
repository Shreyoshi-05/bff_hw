const fs = require("fs");

const requestHandeler = (req,res) =>{
  if(req.url == "/"){
    res.setHeader("Content-Type","text/html");

    res.end(`
    <form method="post" action="/read">
      <input type="text" name="message">
      <button type="submit">click me</button>
    </form>
    `)
  }
  else if(req.url=="/read"){
    res.setHeader("Content-Type","text/html");

    let arr = [];
    req.on("data",(chunk)=>{
      arr.push(chunk);
    });

    req.on("end",()=>{
      const ans = Buffer.concat(arr).toString();

      const parsed = new URLSearchParams(ans);
      const message = parsed.get("message");

      res.end(`<h1>${message}</h1>`);

    })
  }
  else{
    res.setHeader("Content-Type","text/html");
    res.end(`<h1>404 error</h1>`)

  }
};

module.exports = requestHandeler;