const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")
const authController=require("../controllers/authController")

router
.route("/")
.get(authController.protect,userController.getAllUsers)

router
.route("/register")
.post(authController.register)
router
.route("/login")
.post(authController.login)

module.exports=router;
