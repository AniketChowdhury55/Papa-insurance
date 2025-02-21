const express = require("express");
const router = express.Router();
const Record = require("../models/Record");

// Show all records
router.get("/", async (req, res) => {
  const records = await Record.find();
  res.render("dashboard", { records });
});

// Show form to add record
router.get("/new", (req, res) => {
  res.render("addRecord");
});

// Add a new record
router.post("/", async (req, res) => {
  await Record.create(req.body);
  res.redirect("/records");
});

// Show edit form
router.get("/:id/edit", async (req, res) => {
  const record = await Record.findById(req.params.id);
  res.render("editRecord", { record });
});

// Update a record
router.put("/:id", async (req, res) => {
  await Record.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/records");
});

// Delete a record
router.delete("/:id", async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.redirect("/records");
});

module.exports = router;
