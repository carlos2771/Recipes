import express from 'express';
import recipes from "./routes/recipes.routes"
const app = express()
app.use(express.json())

const PORT = 3000;
app.get("/ping", (_req, res) => {
    console.log("here");
    res.send("pong")
})

app.use("/api", recipes)

app.listen(PORT, () => {
 console.log("https//:localhost:3000");
    
})