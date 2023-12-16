import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import { UserModel } from "../models/user.model";
import { sigIn } from "../utils/jw.handle";
import { encrypt, verified } from "../utils/password.handle";


const registeNewUser =async ({name, email, password }:User)=>{
    const chekIs = await UserModel.findOne({email});
    if(chekIs) return "ALREADY_USER";
    const pass = await encrypt(password);
    const registerUser = await UserModel.create({name, email, password:pass});
    return registerUser;
}

const loginUser = async ({name, password}:Auth)=>{

    const chekIs = await UserModel.findOne({name});
    if(!chekIs) return "USER_NOT_EXIST";
    const pass =  chekIs.password;
    const isPass = await verified(password, pass);

    if(!isPass) return "INVALID_DATA_USER";
    const token = await sigIn(chekIs.name, chekIs._id);
    const data = {
        token
    }

    return data;
}

export {loginUser};

export {registeNewUser};