import * as dotenv from "dotenv"
import Express, {json}  from "express"
import cors from "cors"

import { AuthRouter } from "./author/author.router";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const Port: number = parseInt(process.env.PORT as string, 10)  

const app = Express();
app.use(cors()) 
app.use(json())
app.use("/api/authors/", AuthRouter)

app.listen(Port, () => {
    console.log(`The server start as http://localhost:${Port}/`)
})