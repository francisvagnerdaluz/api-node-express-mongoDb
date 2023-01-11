import mongoose from "mongoose"

mongoose.connect("mongodb+srv://dalvz:241198@dalvz.sfrkeno.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;