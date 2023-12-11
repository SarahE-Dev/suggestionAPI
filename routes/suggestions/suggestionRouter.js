const express = require('express');
const router = express.Router();

const suggestionController = require('./controller/suggestionController')

const {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
    getSuggestionByAuthor
} = suggestionController


router.get('/get-all-suggestions', getAllSuggestions)

router.get('/single-suggestion', getSingleSuggestion)

router.post('/create-suggestion', createSuggestion)

router.put('/update-suggestion/:id', updateSuggestion)

router.delete('/delete-suggestion/:id', deleteSuggestion)

router.get('/by-author-suggestion', getSuggestionByAuthor)

module.exports = router