import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
// app.use(cookieParser());

const corsOptions = {
  origin: "https://minhaj-food.netlify.app", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, 
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
