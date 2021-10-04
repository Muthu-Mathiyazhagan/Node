console.log("Before");
// getUsers(1, function (user) {
//     console.log('User', user);

//     getRepositories(user.gitUserName, function (repos) {
//         console.log(repos);

//     })

// });
getUser(1)
    .then(user => getRepositories(user.gitUserName))
    .then(repos => console.log("11111", repos[1]))
    .catch(err => console.log(err));



console.log("After");

function getUser(id) {
    return new Promise((resolve, reject) => {
        let value = true;
        if (value) {
            setTimeout(() => {
                console.log("Reading user Details...!");
                resolve({ id: id, gitUserName: "muthu Resolved" });
            }, 2000);

        } else {
            reject(new Error('The Promise is Failed'));
        }
    })
}
function getRepositories(userName) {
    return new Promise((resolve, reject) => {


        let value = true;
        if (value) {
            setTimeout(() => {
                console.log("getRepositories Called !");
                resolve(['repo1', 'repo2', 'repo3']);
            }, 2000);

        } else {
            // reject(new Error('The Promise is Failed'));
            reject("The Promise Is Failed")

        }




    });




}

