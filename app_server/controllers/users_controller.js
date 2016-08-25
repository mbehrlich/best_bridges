
/* GET users page */
module.exports.index = function (req, res) {
  res.render('./users/users', { title: 'users' });
};

/* GET add new user page */
module.exports.addUser = function(req, res) {
  res.render('./users/new_user', { title: 'Add a new User'});
};

/* GET User info page */
module.exports.userInfo = function(req, res) {
  res.render('./users/user', { title: 'user info'});
};

/* GET edit user page */
module.exports.editUser = function(req, res) {
  res.render('./users/edit_user', { title: 'edit user'});
};
