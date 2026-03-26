import mongoose, {mongo} from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
//import mongoose from "mongoose";

async function conectaNaDatabase() {
   // console.log('String de conexão:', process.env.DB_CONNECTION_STRING);
   await mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDatabase;





