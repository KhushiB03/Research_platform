const app = require ("./app");
const env = require("./config");
app.listen(4000 , ()=>{
    console.log(" SERVER RUNNING ON PORT ${env.PORT}");

});
