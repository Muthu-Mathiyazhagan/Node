// getCustomer(1, (customer) => {
//     console.log('Customer:', customer);
//     if (customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top Movies: ', movies);
//             sendEmail(customer.email, movies, () => {
//                 console.log(`Email Sent to ${customer.email} ...!`);
//             })
//         })

//     }
// })

async function notifyCustomer() {

    const customer = await getCustomer(1);
    console.log(customer);

    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top Movies: ', movies);
        await sendEmail();
        console.log(`Email Sent to ${customer.email}`);
    }

}
notifyCustomer();



function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Muthu Mathiyazhagan',
                isGold: true,
                email: 'muthumathiyazhagan@gmail.com'
            })
        }, 4000);

    })


}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2'])
        }, 4000);
    })

}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);

    })

}