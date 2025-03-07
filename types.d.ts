import { Connection } from "mongoose";

declare global{
  var mongoose: {
    connection: Connection | null,
    promise: Promise<Connection> | null
  }
}

export {}; // This is necessary to prevent TS from thinking this is a module