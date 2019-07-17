var express = require('express');
var router = express.Router();
// const passport = require('passport');
const maraudesController = require('../controllers/maraudesController');
const faker = require('faker');

/* GET maraudes listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', maraudesController.index);
/**

 * @api {Get} /Maraude 1. Get All maraudes

 * @apiName GetMaraudes

 * @apiGroup maraudes

 * @apiSuccess {index} maraudes / Get an Array of maraudes objets

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK

 *  "maraudes": [

 *    {

 *  id: 1

 *  userId: 2,

 *  title: 'Maraude no 1',

 *  startAt: new Date(),

 *  endAt: new Date(),

 *  description: faker.lorem.sentence(),

 *  city: 'Marseille',

 *  isPublished: true,

 *  longitude: '5.368414',

 *  latitude: '43.301999',

 *  photos: [

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *]

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


router.get('/:id(\\d+)/', maraudesController.show);

/**

 * @api {Get} /maraudes/:id  2. Get Maraude by id

 * @apiName GetMaraudes

 * @apiGroup maraudes

 * @apiParam (maraudes) {Number} id Maraudes unique ID.

 * @apiSuccess {show} maraudes/:id Get maraude

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK

 *  "maraude": [

 *    {

 *  id: 1

 *  userId: 2,

 *  title: 'Maraude no 1',

 *  startAt: new Date(),

 *  endAt: new Date(),

 *  description: faker.lorem.sentence(),

 *  city: 'Marseille',

 *  isPublished: true,

 *  longitude: '5.368414',

 *  latitude: '43.301999',

 *  photos: [

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *]

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


// /api/v1/places/search?lat=6.37&lng=43.26&limit=20
router.get('/search', maraudesController.findByCoord);
/**

 * @api {Get} /maraudes/:coord  2. Get Maraude by coord

 * @apiName GetMaraudes

 * @apiParam (Maraudes) {Number} longitude.

 * @apiParam (Maraudes) {Number} latitude.

 * @apiGroup maraudes

 * @apiSuccess {show} maraudes/:coord Get maraude

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK

 *  "maraude": [

 *    {

 *  id: 1

 *  userId: 2,

 *  title: 'Maraude no 1',

 *  startAt: new Date(),

 *  endAt: new Date(),

 *  description: faker.lorem.sentence(),

 *  city: 'Marseille',

 *  isPublished: true,

 *  longitude: '5.368414',

 *  latitude: '43.301999',

 *  photos: [

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *]

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

router.post('/', maraudesController.create);

/**

 * @api {post} /maraudes 3. Create Maraude

 * @apiName PostMaraudes

 * @apiGroup maraudes

 *

 * @apiSuccess {Create} /maraudes Full maraudes object

 *

 * @apiSuccessExample Success-Response:

 *     HTTP/1.1 201 Created

 *     *  "maraude": [

 *    {

 *  id: 1

 *  userId: 2,

 *  title: 'Maraude no 1',

 *  startAt: new Date(),

 *  endAt: new Date(),

 *  description: faker.lorem.sentence(),

 *  city: 'Marseille',

 *  isPublished: true,

 *  longitude: '5.368414',

 *  latitude: '43.301999',

 *  photos: [

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *]

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

router.put('/:id(\\d+)/', maraudesController.update);
/**

 * @api {put} /maraudes/:id 4. Update Maraude by id

 * @apiName PutMaraude

 * @apiGroup maraudes

 * @apiParam (maraudes) {Number} id Maraudes unique ID.

 * @apiSuccess {Update} maraudes/:id Get updated maraude Object

 *

 * @apiSuccessExample Success-Response:

 *  HTTP/1.1 200 OK

 *  "maraude": [

 *    {

 *  id: 1

 *  userId: 2,

 *  title: 'Maraude no 1',

 *  startAt: new Date(),

 *  endAt: new Date(),

 *  description: faker.lorem.sentence(),

 *  city: 'Marseille',

 *  isPublished: true,

 *  longitude: '5.368414',

 *  latitude: '43.301999',

 *  photos: [

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *    { url: faker.image.imageUrl() },

 *]

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

router.delete('/:id(\\d+)/', maraudesController.delete);
/**

 * @api {delete} /maraudes/:id 5. Delete Maraude by id

 * @apiName DeleteMaraude

 * @apiGroup maraudes

 * @apiParam (maraudes) {Number} id Maraudes unique ID.

 * @apiSuccess {204} maraudes/:id No content

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
