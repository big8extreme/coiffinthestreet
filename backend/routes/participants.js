var express = require('express');
var router = express.Router();
const participantsController = require('../controllers/participantsController');
const faker = require('faker');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), participantsController.index);
/**

 * @api {Get} /Participant 1. Get All participants

 * @apiName GetParticipants

 * @apiGroup participants

 * @apiSuccess {index} participants / Get an Array of participants objets

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK

 *  "participants": [

 *    {

 *  id: 1

 *  isValidate: true,

 *  email: "faker.internet.email()",

 *  job: a job selected among 3 choices,

 *  lastName: "faker.name.lastName()",

 *  firstName: "faker.name.firstName()",


 *  city: "faker.adress.city()",

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

router.get('/:id', participantsController.show);
/**

 * @api {Get} /participants/:id  2. Get Participant by id

 * @apiName GetParticipants

 * @apiGroup participants

 * @apiParam (participants) {Number} id Participant unique ID.

 * @apiSuccess {show} participants/:id Get participant

 * @apiSuccessExample Success-Response:

 *  "participant": [

 *    {

 *  id: 1


 *  isValidate: true,

 *  email: "faker.internet.email()",

 *  job: a job selected among 3 choices,

 *  lastName: "faker.name.lastName()",

 *  firstName: "faker.name.firstName()",


 *  city: "faker.adress.city()",

 *       }

 *     ]
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

router.post('/', participantsController.create);
/**

 * @api {post} /participants 3. Create Participant
 * @apiName PostParticipant

 * @apiGroup participants

 *

 * @apiSuccess {Create} /participants Full participants object

 *

 * @apiSuccessExample Success-Response:

 *     HTTP/1.1 201 Created

 *  "participant": [

 *    {

 *  id: 1

 *  isValidate: true,

 *  email: "faker.internet.email()",

 *  job: a job selected among 3 choices,

 *  lastName: "faker.name.lastName()",

 *  firstName: "faker.name.firstName()",


 *  city: "faker.adress.city()",

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

router.put('/:id', passport.authenticate('jwt', { session: false }), participantsController.update);
/**

 * @api {put} /participants/:id 4. Update Participant by id

 * @apiName PutParticipant

 * @apiGroup participants

 * @apiParam (participants) {Number} id Participants unique ID.

 * @apiSuccess {Update} participants/:id Get updated participant Object

 *

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK
 *  "participant": [

 *    {

 *  id: 1


 *  isValidate: true,

 *  email: "faker.internet.email()",

 *  job: a job selected among 3 choices,

 *  lastName: "faker.name.lastName()",

 *  firstName: "faker.name.firstName()",


 *  city: "faker.adress.city()",

 *       }

 *     ]
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

router.delete('/:id', passport.authenticate('jwt', { session: false }), participantsController.delete);
/**

 * @api {delete} /participants/:id 5. Delete Participant by id

 * @apiName DeleteParticipant

 * @apiGroup participants

 * @apiParam (participants) {Number} id Participants unique ID.

 * @apiSuccess {204} participants/:id No content

 * @apiSuccessExample Success-Response:

 *     HTTP/1.1 204 No Content

 *

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
