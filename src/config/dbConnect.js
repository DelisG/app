import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:delis123@cluster0.q0ygpfy.mongodb.net/lists"
);

let db = mongoose.connection;

export default db;
