import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
