const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017");
        console.log("Database Connection Succes!");
    }
    catch (error) {
        console.log("Error connection databases", error);
    }
};