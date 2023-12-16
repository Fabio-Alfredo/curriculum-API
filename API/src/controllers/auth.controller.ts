import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { registeNewUser } from "../services/auth.service"

const registerUser = async ( req:Request, res:Response)=>{
    try{
        const data = req.body;
        const register = await registeNewUser(data);
        res.send(register);
    }catch(e){
        handleHTTP(res, 'ERROR_CREATED_USER', e)
    }
}

export {registerUser};