// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const mobileController = require('../controllers/mobileController');

// Define the /users route
router.get('/users', userController.getAllUsers);

router.post('/newMobile', mobileController.insertNewMobile);

router.get('/fetchAllMobiles', mobileController.fetchMobiles);

router.put('/updatemobile/:id', mobileController.updateMobile);

router.delete('/deleteMobile/:id', mobileController.deleteMobile);

module.exports = router;
