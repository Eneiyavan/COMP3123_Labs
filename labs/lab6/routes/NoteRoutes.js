/*
We want to set up our paths, other words our routes,
to the different URLs that the server can serve
on different methods GET, POST, PUT, DELETE
*/

const NotesModel = require('../model/NoteModel.js');
const express = require("express")
const router = express.Router()

router.post("/notes", async (request, response) => {
    // Validate the request
    if(!request.body.content){
        // JSON body that was passed through the method
        return response.status(400).send({
            message: "Note cannot be empty, must fill in the request body"
        })
    }

    // If the request was valid
    try {
        const note = new NotesModel({
            noteTitle: request.body.content.noteTitle,
            noteDescription: request.body.content.noteDescription,
            priority: request.body.content.priority,
            dateAdded: request.body.content.dateAdded,
            dateUpdated: request.body.content.dateUpdated
        })

        const savedNote = await note.save()
        response.status(201).send(savedNote)
    } catch (error) {
        response.status(500).send({
            message: error.message || "Some error occured while creating the Note"
        })
    }
})

// Retrieve all notes
router.get("/notes", async (request, response) => {
    try {
        const notes = await NotesModel.find()
        response.status(200).send(notes)
    } catch (error) {
        response.status(500).send({
            message: error.message || "Some error occurred while retrieving notes."
        })
    }
})

// Retrieve a single note by ID
router.get("/notes/:noteId", async (request, response) => {
    try {
        const note = await NotesModel.findById(request.params.noteId)
        if (!note) {
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.status(200).send(note)
    } catch (error) {
        response.status(500).send({
            message: error.message || "Error retrieving note with id " + request.params.noteId
        })
    }
})

// Additional POST route (e.g., duplicate or alternate note creation endpoint)
router.post("/notes/custom", async (request, response) => {
    try {
        const note = new NotesModel({
            noteTitle: request.body.noteTitle,
            noteDescription: request.body.noteDescription,
            priority: request.body.priority,
            dateAdded: request.body.dateAdded,
            dateUpdated: request.body.dateUpdated
        })

        const savedNote = await note.save()
        response.status(201).send(savedNote)
    } catch (error) {
        response.status(500).send({
            message: error.message || "Some error occurred while creating the custom note."
        })
    }
})

// Delete a note by ID
router.delete("/notes/:noteId", async (request, response) => {
    try {
        const note = await NotesModel.findByIdAndDelete(request.params.noteId)
        if (!note) {
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.status(200).send({ message: "Note deleted successfully!" })
    } catch (error) {
        response.status(500).send({
            message: error.message || "Could not delete note with id " + request.params.noteId
        })
    }
})

module.exports = router;