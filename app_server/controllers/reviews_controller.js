/* GET add review page */
module.exports.addReview = function(req, res) {
  res.render('newReview', { title: 'add a review' });
};

/* GET edit review page */
module.exports.editReview = function(req, res) {
  res.render('index', { title: 'edit a review' });
};
