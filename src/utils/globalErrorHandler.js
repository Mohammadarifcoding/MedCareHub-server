const globalErrorHandler = (err,_req,res,_next) =>{
    res.status(err.status || 500 ).json({
        message: err.message,
        error: err.errors
    })
}

module.exports = globalErrorHandler