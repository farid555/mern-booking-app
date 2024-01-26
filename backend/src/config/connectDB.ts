import mongoose from "mongoose";

const connectionToDB = async () => {
  try {
    const connectionParams = {
      dbName: process.env.DB_NAME,
    };

    const connect = await mongoose.connect(
      process.env.MONGO_URI as string,
      connectionParams,
    );
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    process.exit(1);
  }
};

export default connectionToDB;
