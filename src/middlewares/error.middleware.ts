const errorMiddleware = ( err: any , req:any , res:any , next:any )=>{
    console.log(err);
    res.status(500).json({
        message : err.message || "  internal server error"
    });
};

module.exports ={ errorMiddleware };