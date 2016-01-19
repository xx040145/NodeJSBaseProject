var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var reqA = req.body.a;
  var reqB = req.body.b;
  var resaa = parseInt(reqA)+parseInt(reqB);
  res.send({"aa":resaa});
});

module.exports = router;
