const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({dasdd: "sadad"})
})


module.exports = router