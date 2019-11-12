/**
 * OreoHTTP Lib
 * Library for making delicious oreo HTTP requests.
 *
 * @version 1.0.0
 * @author Oreo
 * @license MIT
 *
 */

class OreoHTTP {

    get(url) {
        return new Promise((res, rej) => {
            fetch(url)
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        });
    }

    post(url) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err))
        });
    }

    put(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err))
        });
    }

    delete(url) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(() => res('Resource deleted.'))
                .catch(err => rej(err))
        });
    }

}