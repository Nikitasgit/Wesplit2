const express = require("express");
const {
  setGroups,
  getGroups,
  editGroup,
  deleteGroup,
} = require("../controllers/group.controller");

const router = express.Router();

router.get("/", getGroups);
router.post("/", setGroups);
router.put("/:id", editGroup);
router.delete("/:id", deleteGroup);

module.exports = router;
