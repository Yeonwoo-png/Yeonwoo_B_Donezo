import express from "express";
import cors from "cors";
import router from "./routes/todo.js";
import verifyToken from "./middleware/auth.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/todos", verifyToken, router);

//this is for step 9 of backend
//app.use("/api/todos", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});