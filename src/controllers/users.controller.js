const userService = require('../services/users.service');

const getUsers = async function(req, res){

    const data = await userService.getUsers();
    console.log(data);
    res.send(data);
}

module.exports = {
    getUsers
};