const express = require("express");
const router = express.Router();
const Course = require("../Models/Course");
const Subtitle = require("../Models/Subtitle");

//Requirement 7
router.get("/", async (req, res) => {
    const viewCourse = await Course.find({});
    res.send(viewCourse);
});

// Requirement 12
router.get("/:course", async (req, res) => {
    const chosenCourse = await Course.find({ Title: req.params.course });
    console.log(chosenCourse);
    res.send(chosenCourse);
});

//Requirement 23
router.post("/create", async (req, res) => {
    await Course.create({
        ...req.body,
    });

    res.status(200).send("Course created.");
});

router.post("/search/filter", async (req, res) => {
    let filterParams = {};

    if (req.body.Title) {
        filterParams = { ...filterParams, Title: { $regex: req.body.Title } };
    }

    if (req.body.Instructor) {
        filterParams = {
            ...filterParams,
            Instructor: { $regex: req.body.Instructor },
        };
    }

    if (req.body.Rating) {
        filterParams = { ...filterParams, Rating: { $gte: req.body.Rating } };
    }

    if (req.body.Subject) {
        filterParams = {
            ...filterParams,
            Subject: { $regex: req.body.Subject },
        };
    }

    if (req.body.Price) {
        filterParams = { ...filterParams, Price: { $lte: req.body.Price } };
    }

    const filteredCourses = await Course.find(filterParams);
    console.log(filteredCourses);
    res.send(filteredCourses);
});

//req 34
router.put("/:course/rateCourse", async (req, res) => {
    const chosenCourse = await Course.findOne({ Title: req.params.course });
    const newRating = (chosenCourse.SumRatings + req.body.Rating) / (chosenCourse.totalRatings + 1);
    const newTotalRatings = chosenCourse.TotalRatings + 1;
    const newSumRatings = chosenCourse.SumRatings + req.body.Rating;
    await Course.updateOne(
        { Title: req.body.Title },
        { $set: { Rating: newRating } },
        { $set: { TotalRatings: newTotalRatings } },
        { $set: { newSumRatings: newSumRatings } }
    );
    res.status(200).send("Rating changed successfully");
});

// Requirement 24
router.post("/:course/addSubtitleVideo", async (req, res) => {
    const subtitle = await Subtitle.findByIdAndUpdate(req.body.SubtitleId, {
        $set: {
            Video: req.body.VideoLink,
            VideoDescription: req.body.VideoDescription,
        },
    });
    res.send(200);
});

// Requirement 25
router.post("/:course/addPreview", async (req, res) => {
    await Course.updateOne(
        { Title: req.params.course },
        { $set: { PreviewLink: req.body.PreviewLink } }
    );
    res.send(200);
});

router.put("/coursesDiscount", async (req, res) => {
    const chosenCourse = await Course.findOne({ Title: req.body.Title });
    console.log(chosenCourse)
    const newPrice = chosenCourse.Price - (chosenCourse.Price * (req.body.Discount / 100));
    console.log(chosenCourse)
    const x = await Course.updateOne(
        { Title: req.body.Title },
        { $set: { Discount: req.body.Discount, Price: newPrice } },
    );
    console.log(x)
    res.send("Discount added");
});

module.exports = router;