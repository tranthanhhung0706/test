const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// Page Home
app.get("/", (req, res) => {
    res.send('SERVER ON')
})

// ZingMp3Router
const ZingMp3Router = require("./src/routes/ZingRouter")
app.use("/api", cors({ origin: '*' }), ZingMp3Router)


app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});
