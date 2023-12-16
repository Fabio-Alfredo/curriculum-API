import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { loginUser, registeNewUser } from "../services/auth.service"

const registerUserController = async ( req:Request, res:Response)=>{
    try{
        const data = req.body;
        const register = await registeNewUser(data);
        res.send(register);
    }catch(e){
        handleHTTP(res, 'ERROR_CREATED_USER', e)
    }
}

const loginUserController = async(req:Request, res:Response)=>{
    try{
        const data = req.body;
        const {name, password}=data;
        const response = await loginUser({name, password});
        res.send(response);
    }catch(e){
        handleHTTP(res, "INVALID_DATA_USER", e);
    }
}

export {registerUserController, loginUserController};