const {signToken} = require("../../utils/jwt");
class Authservice{
    async  login(email : string , password:string){
        if(email !== "example" && password !=="example"){
            throw new Error(" invalid credentials");
        }
        const token = signToken({
            id: '123',
            role:"user",
        });
        return {token};
    }
}
module.exports = new Authservice();