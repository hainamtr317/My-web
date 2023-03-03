const express = require('express');
const router = express.Router();

const {createUser,getUsers,updateUser,deleteUser} = require('../controllers/userController')

router.route("/v1").post(createUser).get(getUsers)
router.route("/v1/:id").get(getUsers).put(updateUser).delete(deleteUser)

module.exports = router