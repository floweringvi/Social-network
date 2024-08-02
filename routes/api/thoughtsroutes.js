const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction, 
    deleteReaction

} = require('../../controllers/thoughtscontroller.js')

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);

module.exports = router;

//api/thoughts
//get to get all thoughts
//get to get a single thought by _id
//post to crete a new thought (don't forget to push thoughts id to users thoughts array field)

//json
//thougthText : ""
//username :""
//userId:""

//put to update a thought by id 
//delete to remove a thought by its id

// api/thoughts/:thoughtId/reactions
//post to create reaction stored in single thoughts reactions array field
//delete to pull and remove a reaction by reactionId value