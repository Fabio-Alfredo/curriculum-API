import { compare, hash } from "bcryptjs"

const encrypt = async (password:string)=>{
   const pass = await  hash(password, 10);
   return pass;
}

const verified = async (pass:string, passHash:string)=>{
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}

export {encrypt, verified};