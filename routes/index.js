
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gwen Bell | Dark Social Web Strategist' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About'});
};

exports.presence = function(req, res){
  res.render('presence', { title: 'Presence'});
};

exports.writing = function(req, res){
  res.render('writing', { title: 'Writing'});
};

exports.best = function(req, res){
  res.render('best', { title: 'Best'});
};
