const express = require("express");
const { importDataBarang, getAllBarang, getAllBarangSort, getAllBarangByFilter, checkData } = require("../controllers/barangControllers");

const router = express.Router();

router.post("/import-data", importDataBarang);
router.get("/all", getAllBarang);
router.get("/filter", getAllBarangByFilter);
router.get("/sort", getAllBarangSort);
router.get("/check-data", checkData);


module.exports = router;
