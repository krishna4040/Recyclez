const express = require("express");
const router = express.Router();

const { signup, login } = require('../controllers/auth');
const { auth, isSupplier, isReceiver } = require('../middleware/auth');
const { selectRole, getUserDetails, getAllSuppliers, getAllReceivers, getRecycledWasteByaUser, getAddedWasteByaSupplier, getRequestedWasteByaReceiver } = require('../controllers/user');
const { confirmRecycle, addWaste, requestWaste, addedWaste, requestedWaste } = require('../controllers/waste');

router.post('/signup', signup);
router.post('/login', login);
router.post('/selectRole', auth, selectRole);

router.get('/getAllSuppliers', isReceiver, getAllSuppliers);
router.get('/getAllReceivers', isSupplier, getAllReceivers);

router.get('/getUserDetails', getUserDetails);
router.get('/getRecycledWasteByaUser', getRecycledWasteByaUser);
router.get('/getAddedWasteByaSupplier', getAddedWasteByaSupplier);
router.get('/getRequestedWasteByaReceiver', getRequestedWasteByaReceiver);

router.post('/addWasteDetails', auth, isSupplier, addWaste);
router.post('/addWasteDetails', auth, isSupplier, requestWaste);
router.get('/requestedWaste', addedWaste);
router.get('/suppliedWaste', requestedWaste);

router.put('/confirmRecycleWaste', auth, confirmRecycle);

module.exports = router;
