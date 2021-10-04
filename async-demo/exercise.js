getCustomer(1, (customer) => {
    console.log('Customer:', customer);
    if (customer.isGold) {
        getTopMovies((movies) => {
            console.log('Top Movies: ', movies);
            sendMail(customer.email, movies, () => {
                console.log("Email Sent...!");
            })
        })

    }
})

function getCustomer(id, callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: 'Muthu Mathiyazhagan',
            isGold: true,
            email: 'email'
        })
    }, 4000);

}

function getTopMovies(callback) {
    setTimeout(() => {
        callback(['movie1', 'movie2'])
    }, 4000);
}

function sendEmail(email, movies, callback) {
    setTimeout(() => {
        callback();
    }, 4000);
}