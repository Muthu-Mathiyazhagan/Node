const p = new Promise((resolve, reject) => {
    // Kick of some Async work
    // Initially its in Pending Stage
    // Either it will return Result (resolved/Fulfilled)
    // Or Reject if Operation Fail

    setTimeout(() => {

        let value = true;
        if (value) {
            let random = Math.floor(Math.random() * 100);
            resolve(random);
        }
        else {
            console.log("The Promise is Failed");
            // reject(new Error('The Promise is Failed'));
            reject("Reason");
        }

    }, 2000);

});

p.then(result => console.log('Result', result))
    .catch(err => console.log(err));

setTimeout(() => {
    console.log("Test");
}, 10000);