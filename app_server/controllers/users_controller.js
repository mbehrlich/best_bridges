
/* GET users page */
module.exports.index = function (req, res) {
  res.render('users', { title: 'users' });
};

/* GET add new user page */
module.exports.addUser = function(req, res) {
  res.render('users', { title: 'Add a new User'});
};

/* GET User info page */
module.exports.userInfo = function(req, res) {
  res.render('users', { title: 'user info'});
};

/* GET edit user page */
module.exports.editUser = function(req, res) {
  res.render('users', { title: 'edit user'});
};
