const express = require("express");
const {
  getUsers,
  setUsers,
  editUser,
  deleteUser,
} = require("../controllers/user.controllers");

const router = express.Router();

router.get("/", getUsers);
router.post("/", setUsers);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
