require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../Models/User");
const Exercise = require("../Models/Exercise");

router.use(cors());

//authentication
router.get("/posts", authenticateToken, (req, res) => {
    res.send("Authenticated");
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRET_ACCESS_TOKEN);
}

router.post("/create", async (req, res) => {
    await User.create({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password,
        Type: req.body.Type,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Gender: req.body.Gender,
        Country: req.body.Country,
    });
    res.status(200).send("User Created");
});

router.get("/login", async (req, res) => {
    const user = await User.findOne({
        Username: req.body.Username,
        Password: req.body.Password,
    });
    res.send(user);
    res.status(200).send("User Found");
});

router.post("/login", async (req, res) => {
    const user = await User.findOne({
        Username: req.body.Username,
        Password: req.body.Password,
    });
    if (user) {
        const authUser = { name: user.Username, pass: user.Password };

        const accessToken = generateAccessToken(authUser);
        res.json({ accessToken, ...user["_doc"] });
    } else {
        res.sendStatus(300);
    }
});

//----------------------------------------------------------

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
    await User.updateOne(
        { Username: req.params.username },
        { $set: { Country: req.body.country } }
    );
    res.status(200).send("Country Updated");
});

router.put("/:username/addCardDetails", async (req, res) => {
    await User.updateOne(
        { Username: req.params.username },
        { $set: { CardName: req.body.CardName } }
    )
    await User.updateOne(
        { Username: req.params.username },
        { $set: { CardNumber: req.body.CardNumber } }
    )
    await User.updateOne(
        { Username: req.params.username },
        { $set: { CardCVV: req.body.CardCVV } }
    )
    res.status(200).send("Card Updated");
})

router.post("/changePass", async (req, res) => {
    const userDetails = await User.findOne({ Username: req.body.Username });
    if (userDetails.Password === req.body.Password) {
        res.status(200).send("Please type a new password");
    } else {
        await User.updateOne(
            { Username: req.body.Username },
            { $set: { Password: req.body.Password } }
        );
        res.status(200).send("Password changed successfully");
    }
});
//req 33 NOT TESTED PROPERLY
router.post("/:user/rateInstructor", async (req, res) => {
    await User.updateOne(
        { Username: req.body.Username },
        { $set: { Rating: req.body.Rating } }
    );
    // res.send(await User.find({Username: req.params.user}))
    res.status(200).send("Rating changed successfully");
});

// Requirements 29 NOT TESTED PROPERLY
router.put("/:user/edit", async (req, res) => {
    await User.updateOne(
        { Username: req.body.Username },
        { $set: { Biography: req.body.Biography } }
    );
    await User.updateOne(
        { Username: req.body.Username },
        { $set: { Email: req.body.Email } }
    );
    res.send("Biography and/or email updated successfully");
});

router.post("/changePass", async (req, res) => {
    const userDetails = await User.findOne({ Username: req.body.Username });
    if (userDetails.Password === req.body.Password) {
        res.status(200).send("Please type a new password");
    } else {
        await User.updateOne(
            { Username: req.body.Username },
            { $set: { Password: req.body.Password } }
        );
        res.status(200).send("Password changed successfully");
    }
});

router.put("/coursesDiscount", async (req, res) => {
    //const courses= await Course.find({Instructor: req.body.instructor});
    await Course.updateOne({ Title: req.body.Title }, { $set: { Discount: req.body.Discount } });
    res.send("Discount added");
});

module.exports = router;
