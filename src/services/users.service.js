const {TwitterClient} = require('twitter-api-client');
const config = require('../configs/app.configs'); 


const twitterClient = new TwitterClient(config);

const getUsers = async function getUsers(){
    try{
       const data =  await twitterClient.accountsAndUsers.usersSearch({ q: 'AJEnglish' });
       //console.log(data);
       return data;
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getUsers
};