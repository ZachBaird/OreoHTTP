// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Salut'), 1000);
//     })

//     const error = false;

//     if (!error) {
//         const res = await promise; // wait until promise is resolved
//         return res;
//     }
//     else await Promise.reject(new Error('Something went wrong'));
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
}

getUsers().then(users => console.log(users));