import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JW_ENCRYPT || "algovaaqui"

const sigIn = async(user:string, id:object)=>{
    const token = sign({user, id}, JWT_SECRET, {
        expiresIn:"2h",
    })

    return token;
}

export {sigIn};