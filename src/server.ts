const app = require ("./app");
const {env} = require("./config");
app.listen(env.PORT , ()=>{
    console.log(" SERVER RUNNING ON PORT ${env.PORT}");

});
