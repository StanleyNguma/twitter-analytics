var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const {TwitterClient} = require('twitter-api-client');
const config = require('./config'); 


const twitterClient = new TwitterClient(config);


app.listen(port);