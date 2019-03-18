const express = require("express");
const router = express.Router();
const db = require("../models");
// get route -> index
router.get("/", function(req, res) {
	res.redirect("/burgers");
});

// @route    GET /burgers
// @desc     Get all burgers from database
// @access   Public
router.get("/burgers", function(req, res) {

  db.burger.findAll({
		include: [{
			model: db.customer,
		}]
	}).then(results => {
    res.render("index", {
			burger_data: results
		});
	});

});

// @route    POST /burgers
// @desc     Update burgers' devour status
// @access   Public
router.post("/burgers", function(req, res) {
	db.burger.update({
		devoured: true,
	}, {
		where: {
			id: req.body.id
		}
	}).then(results => {
    db.customer.create({
      customer_name: req.body.customer,
      burger_id: req.body.id
    }).then(results => {
      res.sendStatus(200);
    }).catch(err => console.log(err));
	});
});

// @route    POST /burgers/create
// @desc     Add burger to database
// @access   Public
router.post("/burgers/create", function(req, res) { 
  db.burger.create({
		burger_name: req.body.burger_name
	}).then(results => {
    res.redirect("/");
	}).catch(err => console.log(err));
});

module.exports = router;