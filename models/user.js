const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required:true,
        },
        //string
        //unique
        //required
        //trimmed
        email:{
            type: String,
            required:true
        },
        thoughts : [
            {
                type: Schema.Types.ObjectId,
                ref:'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref:'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals:true,
        },
        //email
        //string
        //required
        //unique
        //must match a valid email address, mongoose matching validation
    }
    
        //thoughts
        //array of _id value referencing the 'thought' model

    
    
        //friends 
        //array of _id values referencing the user mdoel (self-reference)
    
    //virtual that's called friendCount that retrieves the length of the users'freinds array field of query
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;