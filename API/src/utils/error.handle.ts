import { Response, Request, NextFunction } from "express"

const handleHTTP = (res:Response, error:string, errorNext?:any)=>{
    res.status(500);
    console.log(errorNext);
    res.send(error);
}

export {handleHTTP};