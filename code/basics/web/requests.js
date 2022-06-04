const http = require("http");

// http.get("http://example.com", (res)=>{
//   res.pipe(process.stdout)
// });

const payload = `{
  "name": "Mike",
  "job": "Boxer"
}`;

const opts = {
  method: "POST",
  hostname: "postman-echo.com",
  path: "/post",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};

const req = http.request(opts, (res)=> {
  process.stdout.write("Status code: " + res.statusCode + "\n");
  process.stdout.write("Body: ");
  res.pipe(process.stdout);
});

req.on("error", (err)=>console.error("Error: ", err));
req.end(payload);