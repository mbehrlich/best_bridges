/* GET homepage */
module.exports.home = function(req, res) {
  res.render('index', { title: 'Best Bridges' });
};

/* GET best bridges page */
module.exports.bestBridges = function(req, res) {
  res.render('index', { title: 'Best Bridges' });
};

/* GET add bridge page */
module.exports.addBridge = function(req, res) {
  res.render('index', { title: 'Add a new bridge' });
};

/* GET bridge info page */
module.exports.bridgeInfo = function(req, res) {
  res.render('index', { title: 'Bridge Info' });
};

/* GET edit bridge page */
module.exports.editBridge = function(req, res) {
  res.render('index', { title: 'Edit a bridge' });
};
