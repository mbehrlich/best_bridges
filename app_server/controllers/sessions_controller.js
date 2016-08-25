/* GET login page */
module.exports.login = function(req, res) {
  res.render('./users/users', { title: 'login' });
};
