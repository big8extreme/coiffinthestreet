var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/**

 * @api {Get} /Index 1. Get All indexes

 * @apiName GetIndexes

 * @apiGroup indexes


 * @apiSuccess {index} indexes / Get a welcome sentence from Express


 * @apiError 400BadRequest Bad Request.

  * @apiError 401Unauthorized Request denied; check the Authorization key of your request's header.

  *

  * @apiErrorExample Error400:

  *     HTTP/1.1 400 Bad Request

  *     {

  *       "error": "Bad Request"

  *     }

  * @apiErrorExample Error401:

  *     HTTP/1.1 401 Unauthorized

  *     Unauthorized

  */

module.exports = router;
