const api = require("./controllers");
const bp = require("body-parser");
const path = require('path');

function router(app)
{
    app.use(bp.json());
    app.get("/api/users", api.readAll);
    app.get("/api/users:id", api.readOne);
    app.delete("/api/users/:id", api.deleteOne);
    app.put("/api/users/:id", usersapi.updateOne);
    app.post("/api/users", api.createOne);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./loginReg/dist/angular-registration-login-example/index.html"))
    });
}

module.exports = router;