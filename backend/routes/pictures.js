var express = require('express');
var router = express.Router();
const passport = require('passport');
const picturesController = require('../controllers/picturesController');

router.delete('/:id', picturesController.delete);
/**

 * @api {delete} /pictures/:id  Delete Pictures by id

 * @apiName DeletePictures

 * @apiGroup pictures

 *@apiParam {number} idPicture

 * @apiSuccess {204} pictures/:id No content

 * @apiSuccessExample Success-Response:

 *     HTTP/1.1 204 No Content


 * @apiError 400BadRequest Bad Request.

 * @apiError 401Unauthorized Request denied; check the Authorization key of your request's header.


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
