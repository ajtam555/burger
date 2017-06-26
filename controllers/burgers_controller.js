var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            cats: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

    router.post("/", function (req, res) {
        burger.create([
            "name", "sleepy"
        ], [
                req.body.name, req.body.sleepy
            ], function () {
                res.redirect("/");
            });
    });

    router.put("/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.update({
            sleepy: req.body.sleepy
        }, condition, function () {
            res.redirect("/");
        });