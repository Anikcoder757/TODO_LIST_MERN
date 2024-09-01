import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

  const Connection = () => {

    const MONGODB_URI = `mongodb+srv://chakrabortyaniketh757:Xt8_6CXire9#JEM@cluster0.3eifi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    mongoose.connect(MONGODB_URI, {useNewUrlparser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('Disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('Error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;