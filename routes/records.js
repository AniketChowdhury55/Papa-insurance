const express = require("express");
const router = express.Router();
const Record = require("../models/Record");

// Show all records
router.get("/", async (req, res) => {
    try {
        const records = await Record.find();
        res.render("dashboard", { records }); // "dashboard" must exist in the views folder
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


// Show form to add a new record
router.get("/new", (req, res) => {
    res.render("addRecord");
});

// Add a new record
router.post("/", async (req, res) => {
    try {
        await Record.create(req.body);
        res.redirect("/records");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding record");
    }
});

// Show edit form
router.get("/:id/edit", async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);
        res.render("editRecord", { record });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching record");
    }
});

// Update a record
router.put("/:id", async (req, res) => {
    try {
        await Record.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/records");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating record");
    }
});

// Delete a record
router.delete("/:id", async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);
        res.redirect("/records");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting record");
    }
});

module.exports = router;
