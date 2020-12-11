const express = require("express");
const router = express.Router();
const hom = require("../controllers/home")

// localhost:3001/api/games
router.get("/", (req, res) => {
    console.log("asdad")
})


module.exports = router