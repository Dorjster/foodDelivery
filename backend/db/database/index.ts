import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://thebuyndorj:Pi44937@dorjooo.72cyvoi.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);

  try {
    await connect(CONNECTION_STRING), console.log("succesfully connected");
  } catch (error) {
    console.log("DB connection is unsuccesfull");
  }
};
