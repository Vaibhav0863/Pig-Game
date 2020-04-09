const express = require("express");

const app = express();
const router = express.Router();

app.use(express.static(__dirname + "public"));

router.get("/", (req, res) => {
	res.render("index");
});

module.exports = router;
