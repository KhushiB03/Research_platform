const dotenv = require('dotenv');
dotenv.config();

const env ={
    PORT : process.env.PORT || 4000,
    JWT_SECRET : process.env.JWT_SECRET ,
    JWT_EXPIRES_IN : process.env.JWT_EXPIRES_IN || "1h"

};
module.exports = { env };


