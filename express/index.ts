import express from 'express';
import bodyParser from "body-parser";
import env from "dotenv";
import cors from "cors";

// Загружаем нужный файл окружения
const envFile = process.env.NODE_ENV === "development" ? ".env.development" : ".env.production";
env.config({ path: envFile });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(()=>{
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  console.log('server start on port - %d', process.env.PORT)
})