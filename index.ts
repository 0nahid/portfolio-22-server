import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { MongoClient } from "mongodb";
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to database
const uri = process.env.MONGO_URI as string;
const client = new MongoClient(uri);

// Create a new database connection
const projectCollection = client.db("test").collection("projects");

// Get all projects
app.get("/projects", async (req: Request, res: Response) => {
  const filter = req.query;
//   console.log(filter);
  const projects = await projectCollection.find(filter).toArray();
  res.send(projects);
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    message: "Welcome to the protfolio API",
    author: "0nahid",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
