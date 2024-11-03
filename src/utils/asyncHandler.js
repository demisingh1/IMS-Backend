const asyncHandler = (fn)=>{
    return (req, res ,next) =>{
      return Promise.resolve(fn(req, res ,next))
                .catch((error)=>{next(error)});
    }
}

const asyncHandlertry = (fn)=>{
      return async(req, res ,next)=>{
            try {
              await fn(req, res ,next)
            } catch (error) {
              res.status(400).json({message:error, er:"hello from asynnc error"})
            }
      }
}
module.exports ={ asyncHandler, asyncHandlertry};