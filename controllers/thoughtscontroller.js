const { ObjectId }= require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts)
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getSingleThought(req,res) {
        try{
            const thought = await Thought.findOne({_id:req.params.thoughtId})
            .select('-__v');

            if(!thought){
                return res.status(404).json({message:"No thoughts here!"})
            }
            
            res.json(thought)
        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req,res) {
        try{
            const thought = await Thought.create(req.body);

            const user = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$addToSet: {thoughts: req.body} },
                {runValidators: true, new: true}
            )
            res.json({thought, user})
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req,res){
        try{
            const thought = await Thought.findOneAndUpdate(
                {_id:req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            if(!thought){
               return res.status(404).json({message: "No thoughts here!"})
            }
            res.json(thought)
        } catch(err){
            res.status(500).json(err);
        }
    },
    async deleteThought (req,res) {
        try{
            const thought = await Thought.findOneAndRemove({_id:req.params.thoughtId});
            
            if(!thought){
                return res.status(404).json({message:"No thoughts here!"})
            }
            res.json({message:'Thought sucessfully deleted'})
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }, 
    async addReaction(req,res){
        try{
            const thought = await Thought.findOneAndUpdate(
                {_id:req.params.id},
                {$addToSet: {reactions: req.body}},
                {runValidators:true, new: true},
            )
            if(!thought){
                res.status(404).json({message:"No thoughts here!"})
            }
            res.json(thought)
        } catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    },
    async deleteReaction(req,res){
        try{
            const thought = await Thought.findOneAndUpdate(
                {_id:req.params.thoughtId},
                {$pull: {reaction: {reactionId:req.params.reactionId}}},
                {runValidators:true, new:true},
            );

            if (!thought){
                return res.status(404).json({message:"No thought here!"})
            }
            res.json(thought)
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}
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