const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Exercise = require("../Models/Exercise");

router.post("/create", async (req, res) => {
    await User.create({
        Username: req.body.Username,
        Password: req.body.Password,
        Type: req.body.Type,
    });
    res.status(200).send("User Created");
});

//requirements 35 & 36
router.get("/startexam", async (req, res) => {
    const quiz = await Exercise.findById(req.body.quizId);
    res.status(200).send(quiz);
});
router.put(":username/solveexam", async (req, res) => {
    const userCourses = await User.findOne(req.params.username).Courses;

    const updatedUserCourses = userCourses.map(c => {
        if (c["_id"] !== req.body.courseId) return;
        c.examGrade = req.body.examGrade;
    });

    await User.updateOne(
        { Username: req.params.username },
        { $set: { Courses: updatedUserCourses } }
    );
    res.status(200).send("Quiz Solved");
});

router.put("/:username/changeCountry", async (req, res) => {
    await User.updateOne({ Username: req.params.username }, { $set: {Country: req.body.country }});
    res.status(200).send("Country Updated");
});

router.post("/changePass", async (req, res) => {
    const userDetails = await User.findOne({ Username: req.body.Username });
    if (userDetails.Password === req.body.Password){
        res.status(200).send("Please type a new password");
    }
    else{
        await User.updateOne({ Username: req.body.Username }, { $set: {Password: req.body.Password }});
        res.status(200).send("Password changed successfully");
    }
});
//req 33 NOT TESTED PROPERLY
router.post("/:user/rateInstructor", async (req, res) => {
    await User.updateOne({ Username: req.body.Username}, { $set: {Rating: req.body.Rating }});
    // res.send(await User.find({Username: req.params.user}))
    res.status(200).send("Rating changed successfully");
}
);

// Requirements 29 NOT TESTED PROPERLY
router.put("/:user/edit", async (req, res) => {
    await User.updateOne({ Username: req.body.Username }, { $set: {Biography: req.body.Biography }});
    await User.updateOne({ Username: req.body.Username }, { $set: {Email: req.body.Email }});
    res.send("Biography and/or email updated successfully");
});


router.post("/changePass", async (req, res) => {
    const userDetails = await User.findOne({ Username: req.body.Username });
    if (userDetails.Password === req.body.Password){
        res.status(200).send("Please type a new password");
    }
    else{
        await User.updateOne({ Username: req.body.Username }, { $set: {Password: req.body.Password }});
        res.status(200).send("Password changed successfully");
    }
});



module.exports = router;
