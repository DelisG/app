import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:delis123@cluster0.obvbuo9.mongodb.net/list"
);

let db = mongoose.connection;

export default db;
