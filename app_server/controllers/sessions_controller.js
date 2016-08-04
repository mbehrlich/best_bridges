/* GET login page */
module.exports.login = function(req, res) {
  res.render('index', { title: 'login' });
};
