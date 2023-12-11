const Suggestion = require('../../model/Suggestion');

async function getAllSuggestions(req, res){
    try {
        let findAllSuggestions = await Suggestion.find({}); 
        res.json({message: 'success', payload: findAllSuggestions})
    } catch (error) {
        res.status(500).json({message: 'error', error})
    }
   
}

async function getSingleSuggestion(req, res){
    try {
        let foundSuggestion = await Suggestion.findById({_id: req.params.id})
        res.json({message: 'success', payload: foundSuggestion})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function createSuggestion(req, res){
    try {
        const {title, author, suggestion, likes, anonymous} = req.body;
        let savedSuggestion = new Suggestion({
            title,
            author,
            suggestion,
            likes,
            anonymous,

        })
        await savedSuggestion.save()
        res.json({message: 'success', payload: savedSuggestion})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function updateSuggestion(req, res){
    try {
        let updatedSuggestion = await Suggestion.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
         res.json({message: 'success', payload: updatedSuggestion})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function deleteSuggestion(req, res){
    try {
        let deleteSuggestion = await Suggestion.findByIdAndDelete({_id: req.params.id});
        res.json({message: "this suggestion was deleted", data: deleteSuggestion})
    } catch (error) {
        res.status(500).json({messgae: 'error', error: error})
    }
}

async function getSuggestionByAuthor(req, res){
    try {
        const author = req.query.author;
        const suggestionsByAuthor = await Suggestion.find({author: author})
        res.json({message: 'success', payload: suggestionsByAuthor})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
    getSuggestionByAuthor
}