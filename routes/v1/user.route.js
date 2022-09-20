const express = require("express");
const userControllers = require("../../controllers/user.controller.js");
const router = express.Router();

router
  .route("/random")
  /**
   * @api {get} /random Random user
   * @apiDescription Get Random user
   * @apiPermission all
   *
   * @apiSuccess {Object{}} A random user.
   */
  .get(userControllers.getRandomUser);

router
  .route("/all")
  /**
   * @api {get} /all all user
   * @apiDescription Get all users
   * @apiPermission all
   *
   * @apiParam  {Number{1-}}      [limit=1]  Users per page
   *
   * @apiSuccess {Object[]} all the products.
   */
  .get(userControllers.getAllUsers);

router
  .route("/save")
  /**
   * @api {post} /save Add user
   * @apiDescription Add new user
   * @apiBody Body example
   {
    "id": 2,
    "gender": "male",
    "name": "Tanvir",
    "address": {
      "city": "Wisokyburgh",
      "zipCode": "90566-7771"
    },
    "contact": 1711111111,
    "photoUrl": "https://via.placeholder.com/600/771796"
  }
   * @apiSuccess {Object{}} Success message.
   */
  .post(userControllers.saveAUser);

router
  .route("/update/:id")
  /**
   * @api {patch} /update/:id update user
   * @apiDescription Update a user by id
   * @apiBody Body example
   {
    "id": 2,
    "gender": "male",
    "name": "Tanvir",
    "address": {
      "city": "Wisokyburgh",
      "zipCode": "90566-7771"
    },
    "contact": 1711111111,
    "photoUrl": "https://via.placeholder.com/600/771796"
  }
  * @apiSuccess {Object{}} Success message.
  */
  .patch(userControllers.updateAUser);

router
  .route("/bulk-update")
  /**
 * @api {patch} /bulk-update update users
 * @apiDescription Update multiple users by ids
 * @apiBody body example
  [
    {
      "id": 1,
      "data": {
        "gender": "male",
        "name": "Md. Masum",
        "contact": 1900000000,
        "address": {
          "city": "Gwenborough",
          "zipCode": "92998-3874"
        },
        "photoUrl": "https://via.placeholder.com/600/92c952"
      }
    },
    {
      "id": 2,
      "data": {
        "gender": "male",
        "name": "Md. Tanvir",
        "address": {
          "city": "Wisokyburgh",
          "zipCode": "90566-7771"
        },
        "contact": 1711111111,
        "photoUrl": "https://via.placeholder.com/600/771796"
      }
    }
  ]
  * @apiSuccess {Object{}} Success message.
  */
  .patch(userControllers.updateMultiUser);

router
  .route("/delete/:id")
  /**
   * @api {delete} /delete/:id Delete user
   * @apiDescription Delete a user by id
   * @apiSuccess {Object{}} Success message.
   */
  .delete(userControllers.deleteAUser);

module.exports = router;
