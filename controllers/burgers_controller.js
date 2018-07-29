/* Inside the `burgers_controller.js` file, import the following:

   * Express
   * `burger.js` */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
})

module.exports = router;