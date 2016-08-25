/* GET add review page */
module.exports.addReview = function(req, res) {
  res.render('./reviews/new_review', { title: 'add a review' });
};

/* GET edit review page */
module.exports.editReview = function(req, res) {
  res.render('./reviews/edit_review', { title: 'edit a review' });
};
