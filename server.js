const express = require("express");
const trans = require("./server/routes");

const app = express();
app.use(express.static( __dirname + '/loginReg/dist/angular-registration-login-example' ));

trans(app);

app.listen(8000, function(){
    console.log("on 8000!");
});