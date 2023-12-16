import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { dbconnected } from './confing/dbConnect';
import { router } from './routes';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(router)

dbconnected().then(()=>{
    console.log(`conectado a la base de datos`) ;
})

app.listen(PORT, ()=>console.log(`corriendo en el puerto ${PORT}`))