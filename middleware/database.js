import { MongoClient } from "mongodb";

let client = null;
let isConnected = false;
let connectionPromise = null;

export default async function database(req, res, next) {
  const uri = process.env.MONGODB_URI || (process.env.mongo_api_pwd
    ? `mongodb+srv://Ironika:${encodeURIComponent(process.env.mongo_api_pwd)}@ironikaspace-p1klq.mongodb.net/ironikaspace?retryWrites=true&w=majority`
    : null);

  if (!uri) {
    console.error("MongoDB connection is not configured.");
    return res.status(503).json({ status: 503, err: "Database unavailable. Please contact the administrator." });
  }

  if (!isConnected) {
    if (!connectionPromise) {
      connectionPromise = Promise.resolve()
        .then(() => {
          client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,
          });
          return client.connect();
        })
        .then(() => {
          console.log("MongoDB connected");
          isConnected = true;
        })
        .catch((error) => {
          console.error("Error connecting to MongoDB:", error.code || error.name);
          isConnected = false;
          connectionPromise = null;
        });
    }

    await connectionPromise;
  }
  if (!isConnected) {
    return res.status(503).json({ status: 503, err: "Database unavailable. Please contact the administrator." });
  }
  req.dbClient = client;
  req.db = client.db("ironikaspace");
  return next();
}
