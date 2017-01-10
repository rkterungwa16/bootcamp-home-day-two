var GitHubApi = require("github");

var github = new GitHubApi({
    
    debug: true,
    protocol: "https",
    host: "api.github.com", 
    pathPrefix: "", 
    headers: {
        "user-agent": "rkterungwa16" 
    },
    Promise: require('bluebird'),
    followRedirects: false, 
    timeout: 5000
});



github.users.getFollowingForUser({

    username: "jonathanegol"
}, function(err, res) {
    console.log(JSON.stringify(res));
});