import mongoose from "mongoose";    

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("Using existing connection");
        return;
    }
    try {
        await mongoose.connect('mongodb://localhost:27017/NEXT_LOGIN')

        isConnected = true;
        console.log("DB Connected");
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
    }