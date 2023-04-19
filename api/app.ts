import express, { Application } from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const server = http.createServer(app);

app.use(cors());

// Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ANONYMOUS ROUTES
const authAnonymousRoutes = require("./routes/tickets/tickets");
app.use("/tickets", authAnonymousRoutes);

server.listen(5000);

export default app;
