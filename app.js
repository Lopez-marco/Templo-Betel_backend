require("dotenv").config();
let express = require("express");
let app = express();

app.get("/test", (req, res) => {
    res.send("hello there");
   });

const sequelize = require("./db");

let recording = require("./controllers/recordingcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();
app.use(require("./middleware/headers"));
app.use(express.json());
app.use("/user", user);

///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////if there is validate session on ports not need these
///////NO VALIDATE SESSION //////
///////NO VALIDATE SESSION //////

app.use("/recording", recording);

app.listen(process.env.PORT, function () {
    console.log("App is Listenig on port 3000 good luck");
});
