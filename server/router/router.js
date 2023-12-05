const express = require("express");
const router = express.Router();

const { signup, login } = require('../controllers/auth');
const { auth, isSupplier, isReceiver } = require('../middleware/auth');
const { selectRole, getUserDetails, getAllSuppliers, getAllReceivers, getRecycledWasteByaUser, getAddedWasteByaSupplier, getRequestedWasteByaReceiver, getCurrentUserDetails } = require('../controllers/user');
const { confirmRecycle, addWaste, requestWaste, addedWaste, requestedWaste, getCategoryWasteAdded, getCategoryWasteRequested } = require('../controllers/waste');

router.post('/signup', signup);
router.post('/login', login);
router.put('/selectRole', auth, selectRole);

router.get('/getAllSuppliers', getAllSuppliers);
router.get('/getAllReceivers', getAllReceivers);

router.get('/getCurrentUserDetails', auth, getCurrentUserDetails);
router.get('/getUserDetails', getUserDetails);
router.get('/getRecycledWasteByaUser', getRecycledWasteByaUser);
router.get('/getAddedWasteByaSupplier', getAddedWasteByaSupplier);
router.get('/getRequestedWasteByaReceiver', getRequestedWasteByaReceiver);

router.post('/create-add-waste-details', auth, isSupplier, addWaste);
router.post('/create-request-waste-details', auth, isReceiver, requestWaste);

router.get('/added-waste', addedWaste);
router.get('/requested-waste', requestedWaste);
router.get('/category-search-added', getCategoryWasteAdded);
router.get('/category-search-requested', getCategoryWasteRequested);

router.put('/confirmRecycleWaste', auth, confirmRecycle);

module.exports = router;