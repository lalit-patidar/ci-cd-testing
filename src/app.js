const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("server is running")
})

app.post('/add-user', (req, res) => {
    res.json({message: "user added success", ...req.body})
})

app.listen(PORT, () => console.log("server is runnign on port 3000"))