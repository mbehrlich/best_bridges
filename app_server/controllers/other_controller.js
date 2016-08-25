/* GET about page */
module.exports.about = function(req, res) {
  res.render('./other/about', { title: 'About'});
};
