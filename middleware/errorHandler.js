const { stack } = require("../Routes/contact.route");
const constants=require("../constants.js");

const errorhandler=(err,req,res,next)=>{
  const statusCode = res.statusCode?res.statusCode:500;
  switch(statusCode){
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: "err.message",
         stackTrace: " err.stackTrace"
      });
      break;
      case constants.NOT_FOUND :
        res.json({
          title: "Not found",
          message: "err.message",
           stackTrace: " err.stackTrace"
        });
        break;
        case constants.UNAUTHORIZED :
        res.json({
          title: "Unauthorized user",
          message: "err.message",
           stackTrace: " err.stackTrace"
        });
        break;
        case constants.SERVER_ERROR:
        res.json({
          title: "server error",
          message: "err.message",
           stackTrace: " err.stackTrace"
        });
        break;
        default:
          console.log("No error");
          break;
  }

};
module.exports=errorhandler;