const express = require('express')
const router = express.Router();
const userController = require('../controllers/user')
// const userAuth = require("../middleware/userAuth")

const verifyAuth = require("../middleware/verifyAuth")

router.post('/', userController.createUser)
router.get('/', verifyAuth , userController.getAllUser)
router.get('/:id', userController.getSingleUser)
router.patch('/asd', userController.updateUser)
router.delete('/:id', userController.deleteRecord)

router.post('/singup', userController.userSignUp)

router.post('/login', userController.userLogin)

module.exports = router;