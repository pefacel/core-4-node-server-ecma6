import mongoose from "mongoose";


try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("MongoDB connected")
} catch (error) {
    console.log("MongoDB error on conection")

}