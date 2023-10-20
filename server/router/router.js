const express = require("express");
const router = express.Router();

const { signup, login } = require('../controllers/auth');
const { auth } = require('../middleware/auth');
const { selectRole, getUserDetails, getAllSuppliers, getAllReceivers } = require('../controllers/user');
const { createWasteDetails, requestedWaste, suppliersWaste, confirmRecycle, getRecycledWaste } = require('../controllers/waste');

router.post('/signup', signup);
router.post('/login', login);
// router.post('/send-otp',sendotp);

router.post('/selectRole', auth, selectRole);
router.post('/getUserDetails', auth, getUserDetails);
router.get('/getAllSuppliers', getAllSuppliers);
router.get('/getAllReceivers', getAllReceivers);

router.post('/createWasteDetails', auth, createWasteDetails);
router.get('/requestedWaste', requestedWaste);
router.get('/suppliedWaste', suppliersWaste);
router.post('/confirmRecycleWaste', auth, confirmRecycle);
router.get('/getRecycledWaste', getRecycledWaste);

module.exports = router;
