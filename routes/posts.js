var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  res.send('respond with post by ID :' + req.params.id);
});

router.post('/', function(req, res, next) {
  res.send('respond with added post');
});

module.exports = router;
