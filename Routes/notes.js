const express = require('express');
const router = express.Router();
const notesControler = require('../Controller/notesController');

router.post('/add_notes',notesControler.newNotes)
router.get('/get_notes', notesControler.getAllNotes)
router.patch('/update_notes', notesControler.updateNotes)
router.delete('delete_note', notesControler.deleteNotes)

module.exports = router;