"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/cidade-controller");

router.get("/", controller.get);
router.get("/id/:id", controller.getById);
router.get("/:uf", controller.getByUF);
router.post("/many", controller.postMany);

module.exports = router;
