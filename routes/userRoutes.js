// const express = require("express");

const router = require("express").Router();
const userController = require("../controllers/userController");

// router.get("/", (req, res) => {
//     res.send("Hello World");
// });

//get all users
router.get("/", userController.getAllUsers); 

//get user by id
router.get("/:id", userController.getUserById); 

//delete user by id
router.delete("/:id", userController.deleteUserById);   

//update user by id
router.put("/:id", userController.updateUserById);  

//create user
router.post("/", userController.createUser);
  
module.exports = router;