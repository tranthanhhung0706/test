const express = require("express")
const router = express.Router()

const chatboxController = require("../controllers/chatboxController")
router.get("/hung",(req,res)=>{
    return res.send("Hello word");
});
//router.get("/",chatboxController.test);
router.get("/webhook",chatboxController.getWebhook);


module.exports = router
