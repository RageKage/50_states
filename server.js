let express = require("express");
let states_api = require("./routes/states");
let path = require('path')

let app = express();

// this will join together the vue app 
let vueAppPath = path.join(__dirname,'client', 'dist')

// this will make it so we can run the vue app through the server 3000 instead of 8080
app.use(express.static(vueAppPath))

app.use(express.json());

app.use("/api", states_api);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server error: " + err);
});

let server = app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port " + server.address().port);
});
