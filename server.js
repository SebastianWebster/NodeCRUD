var express = require("express");
var CORS = require("cors");
var app = express();
app.use(CORS());

app.get("/", function(request, response) {
  response.set("Content-Type", "text/html");
  var qstring = request.query;
  if (qstring) {
    console.log(qstring.f, qstring.l, qstring.a);
    response.send("Hello, " + qstring.f + " " + qstring.l + " a= " + qstring.a);
  } else {
    response.send("ERROR");
  }
});

app.listen(8080);
