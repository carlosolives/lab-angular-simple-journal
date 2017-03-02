/*jshint esversion:6*/

const express       = require('express');
const router        = express.Router();
const journalEntry = require ('../../models/journal-entry');

router.get('/journal-entries', (req, res, next) => {
  journalEntry.find((err, entries) =>
    res.send(JSON.stringify(entries))
  );
});
router.get('/journal-entries/:id', (req, res, next) => {
  const id = req.params.id;
  journalEntry.findOne({_id:id},(err, entrie) =>
    res.send(JSON.stringify(entrie))
  );
});

module.exports = router;
