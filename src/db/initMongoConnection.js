import mongoose from 'mongoose';
import { env } from '../utils/evn.js';

export const initMongoConnection = async () => {
  try {
    
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const dataBase = env('MONGODB_DB');

    const url_mongo = `mongodb+srv://${user}:${password}@${url}/${dataBase}?retryWrites=true&w=majority&appName=Cluster0`;


    await mongoose.connect(url_mongo);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(`Error connect DB`, error);
    throw error;
  }
};


initMongoConnection();