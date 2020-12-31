const express = require("express");
const router = express.Router();
const validateSession = require("../middleware/validate-session");
const Recordings = require("../db").import("../models/recordings");

//Create Recording post

router.post("/create", validateSession, (req, res) => {
    const recording = {
        description: req.body.record.description,
        date: req.body.record.date,
        title: req.body.record.title,
        video: req.body.record.video,
        audio: req.body.record.audio,
        owner: req.user.id,
    };
    Recordings.create(recording)
        .then((recording) => res.status(200).json(recording))
        .catch((err) => res.status(500).json({ error: err }));
});


//Find All

router.get("/all", (req, res) => {
    Recordings.findAll()
        .then((recording) => res.status(200).json(recording))
        .catch((err) => res.status(500).json({ error: err }));
});

/////Find By id

router.get("/recording/:id", function (req, res) {
    let recording = req.params.id;
    Recordings.findAll({
        where: { id: recording },
    })
        .then((recording) => res.status(200).json(recording))
        .catch((err) => res.status(500).json({ error: err }));
});

//Update recording

router.put("/recording/:id", validateSession, function (req, res) {
    const updateEntry = {
        description: req.body.record.description,
        date: req.body.record.date,
        title: req.body.record.title,
        audio: req.body.record.audio,
        video: req.body.record.video,
    };

    const query = { where: { id: req.params.id, owner: req.user.id } };

    Recordings.update(updateEntry, query)
        .then((recording) => res.status(200).json(recording))
        .catch((err) => res.status(500).json({ error: err }));
});

//Delete Recording

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id } };

    Recordings.destroy(query)
        .then(() => res.status(200).json({ message: "Recording Post Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;