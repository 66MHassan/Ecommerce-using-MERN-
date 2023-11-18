const express=require("express")
const router=express.Router()
const controller=require("../controllers/userController")

router
.route("/")
.get(controller.getAllProducts).post(controller.createProduct)

module.exports=router;
