import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:delis123@cluster0.obvbuo9.mongodb.net/app"
);

let db = mongoose.connection;

export default db;
