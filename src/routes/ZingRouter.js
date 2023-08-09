const express = require("express")
const router = express.Router()

const ZingController = require("../controllers/chatboxController")

// getSong
// router.get("/hung", ZingController.getSong)

router.get("/hung1",(req,res)=>{
    console.log("hung")
    return res.send("Hello word");
});
router.get("/webhook1",ZingController.test);
router.get("/webhook",ZingController.getWebhook);
router.get("/webhook",ZingController.postWebhook);
module.exports = router
