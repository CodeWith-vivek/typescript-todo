import express from "express";
import path from "path";
import bodyParser from "body-parser";
import taskRoutes from "./routes/task.routes";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", taskRoutes);

export default app;
