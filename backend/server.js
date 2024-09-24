import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

const app = express();

// use cors
// app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke one ",
      content: "Why did the chicken cross the road? To get to the other side.",
    },
    {
      id: 2,
      title: "joke two ",
      content: "Why did the tomato turn red? It saw the salad dressing.",
    },
    {
      id: 3,
      title: "joke three ",
      content:
        "Why did the scarecrow win an award? He was outstanding in his field.",
    },
    {
      id: 4,
      title: "joke four ",
      content: "Why did the dog go to the dentist? To get its tooth checked.",
    },
    {
      id: 5,
      title: "joke five ",
      content: "Why did the cow cross the road? To get to the other side.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
