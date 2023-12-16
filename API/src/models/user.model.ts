import { Schema, model } from "mongoose";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        }
    },{
        timestamps:true,
        versionKey:false
    }
)

const UserModel = model('user',UserSchema);

export {UserModel};