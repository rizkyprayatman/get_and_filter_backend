const express = require("express");
const { getAllCategory } = require("../controllers/categoryControllers");

const router = express.Router();

router.get("/all", getAllCategory);


module.exports = router;
