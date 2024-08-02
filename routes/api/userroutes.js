const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser, 
    newFriend,
    deleteFriend

} = require('../../controllers/usercontroller.js');

router.route('/').get(getUsers).post(createUser);

router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends').post(newFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;

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