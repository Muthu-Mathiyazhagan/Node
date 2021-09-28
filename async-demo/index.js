console.log("Before");
getUser(1, function (user) {
    console.log('User', user);

    getRepositories(user.gitUserName, function (repos) {
        console.log(repos);

    })

});



console.log("After");

function getUser(id, callback) {

    setTimeout(() => {
        console.log("Reading user Details...!");
        callback({ id: id, gitUserName: "muthu" });
    }, 2000);

}
function getRepositories(userName, callback) {

    console.log("getRepositories Called !");
    callback(['repo1', 'repo2', 'repo3']);


}