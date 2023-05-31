import { MongoClient } from "mongodb";

const client = new MongoClient(
  `mongodb+srv://Ironika:${process.env.mongo_api_pwd}@ironikaspace-p1klq.mongodb.net/ironikaspace?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let isConnected = false;
let connectionPromise = null;

export default async function database(req, res, next) {
  if (!isConnected) {
    if (!connectionPromise) {
      connectionPromise = client
        .connect()
        .then(() => {
          console.log("MongoDB connected");
          isConnected = true;
        })
        .catch((error) => {
          console.error("Error connecting to MongoDB:", error);
          isConnected = false;
          connectionPromise = null;
        });
    }

    await connectionPromise;
  }
  req.dbClient = client;
  req.db = client.db("ironikaspace");
  return next();
}
