import express, {Request, Response} from 'express';
import bodyParser from "body-parser";
import env from "dotenv";
import cors from "cors";
import chalk from 'chalk';

type Params = unknown
type ResBody = unknown
type ReqBody = unknown
type ReqQuery = unknown
type Locals = any

const PORT = process.env.PORT || 5555;

// Загружаем нужный файл окружения
const envFile = process.env.NODE_ENV === "development" ? ".env.development" : ".env.production";
env.config({ path: envFile });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>, res: Response<any>) => {
  res.status(200)

  res.send({
    id: 221,
    name: 11,
  })
  return
})

app.listen(PORT, ()=>{
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  // console.log('server start on port - %d', PORT)
  console.log(
      chalk.blueBright('🔧 Environment:'),
      chalk.bold.yellow(process.env.NODE_ENV || 'not set')
  );

  console.log(
      chalk.greenBright('🚀 Server started on'),
      chalk.bold.cyan(`http://localhost:${PORT}`)
  );
})