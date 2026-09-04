const express = require("express");
const router = express.Router();

const mercedesController = require("../controllers/mercedesController");

router.get("/", mercedesController.listar);
router.get("/:id", mercedesController.buscarPorId);
router.post("/", mercedesController.cadastrar);

module.exports = router;
