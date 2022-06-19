function addPost(){
    fetch('https://jsonplaceholder.typicode.com/todos/1'), {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'this is my post',
            userID: 1
        }),
        headers: {
            'Content-type': 'application/json; charset= UTF-8'
        }
    }
    .then(res => res.json())
    .then(data => console.log('done'))
}
