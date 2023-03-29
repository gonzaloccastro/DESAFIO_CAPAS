import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.DB_PORT,
  persistence: process.env.DB_PERSISTENCE,
  mongoUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rwwtfis.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
