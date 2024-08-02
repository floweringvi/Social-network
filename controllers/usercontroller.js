const { ObjectId }= require('mongoose');
const { User, Thought } = require('../models')

module.exports ={
    async getUsers(req,res) {
        try{
            const users = await User.find();
            res.json(users)
        } catch(err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },
    async getSingleUser(req,res) {
        try{
            const user = await User.findOne({_id: req.params.userId})
            .select('-__v');

            if(!user) {
                return res.status(404).json({message: "no such user found!"})
            }
            res.json(user)
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try {
            const user = await User.create(req.body);
            res.json(user);

        } catch(err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req,res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            if(!user) {
                res.status(404).json({message:"No such user exists"})
            }
            res.json(user)
        } catch(err) {
            res.status(500).json(err);
        }

    },
    async deleteUser(req,res) {
        try {
            const user = await User.findOneAndRemove({_id: req.params.userId});

            if(!user){
                return res.status(404).json({message:"No such user exists"})
            }

            res.json({message:'User successfully deleted'})
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    // async newFriend(req,res){
    //     try{

    //     }
    // }
}
// api/users
//  get all
//  get user by single _id + friend and thought data

//post a new user
//username
//email

//put to update a user by id 

//delete user by id 

//api/users/:userId/friends/:friendId
//post to add a new friend to a users friend list
//delete to remove friend from friends list