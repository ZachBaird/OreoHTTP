const http = new OreoHTTP;

// Get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// user data to test post
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johnd@gmail.com'
};

// put request - could be a post if we change method and remove id
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


// delete request
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));