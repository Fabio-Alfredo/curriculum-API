import { User } from "../interface/user.interface";
import { UserModel } from "../models/user.model";
import { encrypt } from "../utils/password.handle";


const registeNewUser =async ({name, email, password }:User)=>{
    const chekIs = await UserModel.findOne({email});
    if(chekIs) return "ALREADY_USER";
    const pass = await encrypt(password);
    const registerUser = await UserModel.create({name, email, password:pass});
    return registerUser;
}

export {registeNewUser};