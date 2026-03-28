import Bull from "bull";
//create a new queue with name document processing
// has 2 arguments (var , {object})
//object use object to connect with redis-> runs a object directly 
export const documentQueue = new Bull ("document-processing",{
    redis:{
        host :"127.0.0.1",
        port:6379,
    },

});