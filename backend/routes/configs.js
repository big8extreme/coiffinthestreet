var express = require('express');
var router = express.Router();
const faker = require('faker');
const passport = require('passport');
const configsController = require('../controllers/configController');

/* GET maraudes listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', configsController.index);
/**
 * @api {Get} /Config 1. Get All configs

 * @apiName GetConfigs

 * @apiGroup configs

 *@apiParam {Token} bearer.

 * @apiSuccess {index} configs / Get an Array of configs objets

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK

 *  "configs": [

 *    {

 *           "id": 1,

 *           "cgu": "this is a sentence",

 *           "charte": "this is a short text",

 *           "email": "faker.internet.email()",


 *           "videoGuidelines": "this is a short text",

 *            "videoPath": "faker.internet.url()",


 *           "legalMention": "this is a short text"


 *       }

 *     ]

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
router.put('/', passport.authenticate('jwt', { session: false }), configsController.update);
/**

 * @api {put} /configs/:id 2. Update Config by id

 * @apiName PutConfig

 * @apiGroup configs

 *

 * @apiSuccess {Update} configs/:id Get updated config Object

 *

 * @apiSuccessExample Success-Response:

 *     HTTP/1.1 200 OK

 *           "updatedConfig" :{

 *            "id": 1,

 *           "cgu": "this is a sentence",

 *           "charte": "this is a short text",

 *           "email": "faker.internet.email()",


 *           "videoGuidelines": "this is a short text",

 *            "videoPath": "faker.internet.url()",


 *           "legalMention": "this is a short text"

 *   }

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

router.post('/contact', configsController.contactAdmin)
/**

 * @api {post} /configs 3. Create Config

 * @apiName PostConfigs

 * @apiGroup configs

 *

 * @apiSuccess {Create} /configs Full services object

 *

 * @apiSuccessExample Success-Response:

 *     HTTP/1.1 201 Created

 *     "config": {

   *            "id": 1,

   *           "cgu": "this is a sentence",

   *           "charte": "this is a short text",

   *           "email": "faker.internet.email()",


   *           "videoGuidelines": "this is a short text",

   *            "videoPath": "faker.internet.url()",


   *           "legalMention": "this is a short text"

 *   }

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
