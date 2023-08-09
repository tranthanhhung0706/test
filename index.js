const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// Page Home
app.get("/", (req, res) => {
    res.send('SERVER ON1')
})




app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});
