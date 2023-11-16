const dynamo = require('../Dynamo/dynamo');
const generateUniqueId = require('generate-unique-id')

const newNotes = async(req, res) => {
    const {uId, note, noteTitle} = req.body;
    const noteId = generateUniqueId();
    const item = {
        uId, noteId, noteTitle, note
    }
    dynamo.addNotes(item).then(() =>
    res.status(200).send({message: "success"})
    ).catch(
        (err) => {
            console.log(err)
            res.status(404).send({message: "something went wrong try again"})
        }
    )
}

const deleteNotes = async(req, res) => {
    const {noteId} = req.body;
    console.log(noteId);
    dynamo.deleteNotes(noteId).then((response) =>
    res.status(200).send({message: "success", response})
    ).catch(
        (err) => {
            console.log(err)
            res.status(404).send({message: "something went wrong try again"})
        }
    )
}

const getAllNotes = async(req, res) => {
    const {uId} = req.body;
    const notes = dynamo.getnotesById(uId).then((response) =>{
        res.status(200).send({message: "success" , response})
    }
    ).catch(
        (err) => {
            console.log(err)
            res.status(404).send({message: "something went wrong try again"})
        }
    )
}

const updateNotes = async(req,res) => {
    const {uId, noteId, note} = req.body;
    const params = {
        uId, noteId, note
    }
    dynamo.updateNotes(params).then(() =>
    res.status(200).send({message: "success"})
    ).catch(
        (err) => {
            console.log(err)
            res.status(404).send({message: "something went wrong try again"})
        }
    )
}

module.exports = {newNotes, deleteNotes, getAllNotes, updateNotes}