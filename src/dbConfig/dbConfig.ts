import mongoose, { connection, mongo } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.mongo_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log(`Something wrong with database : ${err}`);
      process.exit();
    });
  } catch (err) {
    console.log(`Something went wrong : ${err}`);
  }
}
