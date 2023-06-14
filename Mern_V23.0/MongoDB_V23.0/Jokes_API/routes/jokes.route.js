const express = require("express");
const router = express.Router();
const jokesController = require("../controllers/jokes.controller");

router.get("/", jokesController.getAllJokes);
router.get("/:id", jokesController.getJoke);
router.post("/", jokesController.postJoke);
router.patch("/:id", jokesController.patchJoke);
router.delete("/:id", jokesController.deleteJoke);

module.exports = router;
