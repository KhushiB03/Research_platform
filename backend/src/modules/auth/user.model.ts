const pool = require("../../config/db");

const findUserByEmail = async(email:string)=>{
    const[rows] = await pool.execute(
        "SELECT * FROM users WHERE email =?",[email]);
        return rows[0];
    
};

const createUser = async(email : string , password:string)=>{
    const [result] = await pool.execute(
        "INSERT INTO users (email,password) VALUES (?,?)",
        [email,password]
    );
    return result;
};

module.exports={
    findUserByEmail,
    createUser

};