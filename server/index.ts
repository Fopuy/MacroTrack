import express from "express";
const app = express();
import indexRouter from './routers/indexRouter.js'
import addMealRouter from './routers/addMealRouter.js'
import cors from 'cors'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/api/index", indexRouter)
app.use("/api/addmeal", addMealRouter)

const PORT = process.env.PORT;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT||3000}`)
})