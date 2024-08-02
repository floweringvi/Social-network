const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
    //thought
    const thoughtSchema = new Schema(
        {
            thoughtText :{
                type: String,
                required: true,
                max_length: 280,
            },
            createdAt :{
                type: Date,
                default: Date.now,
            },
            username:{
                type: String,
                required: true,
            },
            reactions: [reactionSchema],
        }, 
        {
            toJSON: {
                virtuals: true,
                getters: true,
            }
        }
    );

    const Thought = model('thought', thoughtSchema);

    module.exports = Thought;
//thoughtText
//string 
//required
//must be between 1-280 char

//createdAt
//date
//set default to current timestamp
//user a getter to format on query

//username(user that created thought)
//string
// required

//reactions(like replies)
//array of nested documents created with reactionSchema

//create virtual reactionCount that retrieves the length of the thought's reactions array field

