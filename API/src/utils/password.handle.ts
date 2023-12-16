import { compare, hash } from "bcryptjs"

const encrypt = async (password:string)=>{
   const pass = await  hash(password, 10);
   return pass;
}



export {encrypt};