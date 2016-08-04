var express = require('express');
var router = express.Router();
var ctrlBridge = require('../controllers/bridges_controller');
var ctrlUser = require('../controllers/users_controller');
var ctrlReview = require('../controllers/reviews_controller');
var ctrlOthers = require('../controllers/other_controller');
var ctrlSession = require('../controllers/sessions_controller');


/* Bridge pages. */

router.get('/', ctrlBridge.home);
router.get('/bridges/best', ctrlBridge.bestBridges);
router.get('/bridges/new', ctrlBridge.addBridge);
router.get('/bridges/1', ctrlBridge.bridgeInfo);
router.get('/bridges/1/edit', ctrlBridge.editBridge);

/* Review pages. */
router.get('/bridges/1/reviews/new', ctrlReview.addReview);
router.get('/bridges/1/reviews/1/edit', ctrlReview.editReview);

/* Session pages */
router.get('/login', ctrlSession.login);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
