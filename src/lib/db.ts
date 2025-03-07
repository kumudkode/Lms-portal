import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

let cached = global.mongoose;

// no variable named mongoose in global object
if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

export async function connectDB(){
  // already have a connection
  if(cached.connection){
    return cached.connection;
  }
  // no connection and no promise pending then create one
  if(!cached.promise){
    const options = {};
    cached.promise = mongoose.connect(MONGODB_URI, options).then(()=> mongoose.connection);
  }
  // pending promise then wait for it to resolve
  try {
    cached.connection = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  // return the connection
  return cached.connection;
}

