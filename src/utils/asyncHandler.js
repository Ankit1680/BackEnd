
const asyncHandler = (requestHandler) => {

    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=> next(err))
    }
}


export default asyncHandler



// const asyncHandler2 = (fn) => async (req, res, next) => {

//     try {
        
//         await fn(req, res, next)

//     } catch (error) {
        
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }