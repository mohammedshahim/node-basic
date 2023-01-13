const express = require("express");
const { addPosts } = require("../controllers/post");
const router = express.Router();

router.route("/").get(addPosts);

module.exports = router;
