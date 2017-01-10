var GitHubApi = require("github");

var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "rkterungwa16" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

// TODO: optional authentication here depending on desired endpoints. See below in README.

github.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
    username: "jonathanegol"
}, function(err, res) {
    console.log(JSON.stringify(res));
});