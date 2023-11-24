const express=require("express")
const router=express.Router()
const controller=require("../controllers/userController")

router
.route("/")
.get(controller.getAllUsers).post(controller.createUser)

module.exports=router;
