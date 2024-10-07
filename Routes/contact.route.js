const express= require('express');

const router = express.Router();
const {
  getContacts,
  postContacts,
  putContacts,
  deleteContacts
} = require("../controllers/contact.controller");
const validateToken=require("../middleware/validateTokenHandler.js");
router.use(validateToken);

router.route("/").get(getContacts);

router.route("/").post(postContacts);

router.route("/:id").put(putContacts);

router.route("/:id").delete(deleteContacts);


module.exports=router;