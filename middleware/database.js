import { MongoClient } from 'mongodb';

const client = new MongoClient(`mongodb+srv://Ironika:${process.env.mongo_api_pwd}@ironikaspace-p1klq.mongodb.net/ironikaspace?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = await client.db("ironikaspace");
  return next();
}