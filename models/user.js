const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username:
        //string
        //unique
        //required
        //trimmed
    },
    {
        //email
        //string
        //required
        //unique
        //must match a valid email address, mongoose matching validation
    },
    {
        //thoughts
        //array of _id value referencing the 'thought' model

    },
    {
        //friends 
        //array of _id values referencing the user mdoel (self-reference)
    }
    //virtual that's called friendCount that retrieves the length of the users'freinds array field of query
)