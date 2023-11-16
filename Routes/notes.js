const express = require('express');
const router = express.Router();
const notesControler = require('../Controller/notesController');

router.post('/add',notesControler.newNotes)
router.post('/get', notesControler.getAllNotes)
router.patch('/update', notesControler.updateNotes)
router.post('/delete', notesControler.deleteNotes)

module.exports = router;