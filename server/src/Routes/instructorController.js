const express = require("express");
const router = express.Router();
const Course = require("../Models/Course");
const Exercise = require("../Models/Exercise");
const User= require("../Models/User");

// Requirements 18 & 19 & 20
router.get("/:instructor/courses", async (req, res) => {
    let searchParams = { Instructor: req.params.instructor };

    if (req.body.Title) {
        searchParams = { ...searchParams, Title: req.body.Title };
    }

    if (req.body.Subject) {
        searchParams = { ...searchParams, Subject: req.body.Subject };
    }

    if (req.body.Price) {
        if (req.body.PriceRange === ">")
            searchParams = { ...searchParams, Price: { $gte: req.body.Price } };
        else if (req.body.PriceRange === "<")
            searchParams = { ...searchParams, Price: { $lte: req.body.Price } };
        else searchParams = { ...searchParams, Price: req.body.Price };
    }

    const instructorCourses = await Course.find(searchParams);
    console.log(instructorCourses);
    res.send(instructorCourses);
});
//requirements 26 & 27
router.post("/createexam", async (req, res) => {
    await Exercise.create({
        Questions: req.body.Questions,
    });
    res.status(200).send("Exercise Created");
});

//28
router.get("/:user/instructorRating", async (req, res) => {
    const inst= await User.findOne({Username: req.params.user});
    if (inst.Type!= "Instructor"){
        res.send("Not an instructor");
    }
    else{
    let ir = inst.Rating.toString();
    let rev= inst.Reviews;
    console.log(ir);
    console.log(rev);
    let a = {ir, rev};
    res.send(a);
    }
});

//30
router.put("/:instructor/coursesDiscount", async (req, res) => {
    //const courses= await Course.find({Instructor: req.body.instructor});
    await Course.updateOne({ Title: req.body.Title }, { $set: {Discount: req.body.Discount}});
    await Course.updateOne({ Title: req.body.Title }, { $set: {DiscountDuration: req.body.DiscountDuration}});
    res.send("Discount added")
});

//21
router.get("/:instructor/coursesRatingsAndReviews", async (req,res) => {
    const courses = await Course.find({Instructor : req.params.Instructor});
    res.send(courses)
});

module.exports = router;
