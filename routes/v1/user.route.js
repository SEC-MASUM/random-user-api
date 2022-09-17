const express = require("express");
const userControllers = require("../../controllers/user.controller.js");
const router = express.Router();

router.route("/random").get(userControllers.getRandomUser);

router.route("/all").get(userControllers.getAllUsers);

router.route("/save").post(userControllers.saveAUser);

router.route("/update/:id").patch(userControllers.updateAUser);
/**
[
  {
    "id": 1,
    "data": {
      "gender": "male",
      "name": "Masumaaaaaaaaaa",
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
      "name": "Tanvir",
      "address": {
        "city": "Wisokyburgh",
        "zipCode": "90566-7771"
      },
      "contact": 1711111111,
      "photoUrl": "https://via.placeholder.com/600/771796"
    }
  }
]

*/
router.route("/bulk-update").patch(userControllers.updateMultiUser);

router.route("/delete/:id").delete(userControllers.deleteAUser);

module.exports = router;
