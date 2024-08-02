const {Schema, Types} = require('mongoose');
reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody :{
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String, 
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }, 
    {
        toJSON:{
            getters: true,
        }
    }
)
//reaction
//just schema

//reactionId
//use objecrtId data type
//default value is set to new object ID

//reactionBody
//string
//required
//280 character max

//username
//string 
//required

//createdAt
//date
//set  default value to the current time stamps
//getter to format time stamp on query 