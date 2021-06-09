
const express = require('express')
const router = express.Router()
const User = require('../models/SignUpModels')
const Templates = require('../models/Template')
const bcrypt = require('bcryptjs')
const pdf = require('html-pdf');
const pdfTemplate = require('../Documents/temp');

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: 'plz fill the field properly' })
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'email already exist' });
        }
        var mongoose = require('mongoose');
        var id = mongoose.Types.ObjectId();
        const user = new User({ username, email, password, id });
        await user.save();
        res.status(201).json({ message: "added successfully" })
    } catch (err) {
        console.log(err);
    }
})

router.post('/signin', async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "email doesn't exist" });
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ error: "password doesn't match" })
            }
            else {
                res.json({ message: "login successfully", status: true, id: userLogin.id, email: email, username: userLogin.username })

            }
        } else {
            res.status(400).json({ error: "credential error" })
        }

    } catch (err) {
        console.log(err);
    }
})
const globalUser = new User({ username: "", email: "", password: "", temp: [] })
router.post('/signinf', (req, res, next) => {
    var username = req.body.email

    User.findOne({ $or: [{ email: username }, { username: username }] })
        .then(user => {
            if (user) {
                this.globalUser = user;
                res.json({
                    message: 'login successfully',
                    email: username,
                    status: true
                })

            }
            else {
                res.json({
                    message: "The given username/email is not registered yet !",
                    status: false
                })
            }
        })
})

router.put('/reset', async (req, res, next) => {
    var password = req.body.password
    password = await bcrypt.hash(password, 10)
    this.globalUser.update(
        {
            password: password
        }
    )
        .then(() => {
            res.json({
                message: 'password updated successfully',
                password: password,
                status: true
            })
        })
        .catch(error => {
            res.json({
                message: "error",
                status: false
            })
        })

})

router.post('/create-pdf', async (req, res) => {
    const { tempid, firstName,
        lastName,
        email,
        mobile,
        linkedIn,
        github,
        University_or_SchoolName,
        MajorSubject,
        qualification,
        passingYear,
        Percentage,
        companyName,
        Position,
        Start_Date,
        End_Date,
        Description,
        ProjectTitle,
        ProjectLink,
        ProDescription,
        Skill,
        language,
        Certification,
        achievements,
        seminar,
        hobbies,
        userID } = req.body
    temp = {
        userID,
        tempid,
        firstName,
        lastName,
        email,
        mobile,
        linkedIn,
        github,
        University_or_SchoolName,
        MajorSubject,
        qualification,
        passingYear,
        Percentage,
        companyName,
        Position,
        Start_Date,
        End_Date,
        Description,
        ProjectTitle,
        ProjectLink,
        ProDescription,
        Skill,
        language,
        Certification,
        achievements,
        seminar,
        hobbies
    };
    const template = new Templates(temp);
    await template.save();
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        //res.send(Promise.resolve());
        res.send({ tempid: temp.tempid });
    });
})

router.post('/getTemplates', async (req, res) => {
    try {

        const { userID } = req.body;

        const templates = await Templates.find({ userID: userID });
        res.json({ templates: templates })
    } catch (err) {
        console.log(err);
    }
})

router.post('/updateTemplate', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            mobile,
            linkedIn,
            github,
            University_or_SchoolName,
            MajorSubject,
            qualification,
            passingYear,
            Percentage,
            companyName,
            Position,
            Start_Date,
            End_Date,
            Description,
            ProjectTitle,
            ProjectLink,
            ProDescription,
            Skill,
            language,
            Certification,
            achievements,
            seminar,
            hobbies,
            resume_doc_id } = req.body

        ObjectId = require('mongodb').ObjectID;
        Templates.updateOne(
            { _id: new ObjectId(resume_doc_id) },
            {
                $set:
                {
                    firstName,
                    lastName,
                    email,
                    mobile,
                    linkedIn,
                    github,
                    University_or_SchoolName,
                    MajorSubject,
                    qualification,
                    passingYear,
                    Percentage,
                    companyName,
                    Position,
                    Start_Date,
                    End_Date,
                    Description,
                    ProjectTitle,
                    ProjectLink,
                    ProDescription,
                    Skill,
                    language,
                    Certification,
                    achievements,
                    seminar,
                    hobbies
                }
            },
            function (err, result) {
                if (result) {
                    res.json({
                        status: true
                    })
                    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => { });
                }
                else {
                    res.json({
                        status: false
                    })
                }
            }
        );


    } catch (err) {
        console.log(err);
    }
})

module.exports = router;