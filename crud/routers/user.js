const express=require("express")
const router=express.Router()
const userController=require('../controllers/user')


router.post('/',userController.CreateUser)
router.get('/',userController.getAlluser)
module.exports=router;