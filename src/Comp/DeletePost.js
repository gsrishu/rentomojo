

export function DeletePost(postId, userId) {
    let userName;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(json  =>{
       userName = json.username;
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: 'DELETE' })
    .then(window.location.href = `/user/${userId}/${userName}`)
     //  console.log(userName);
       
    });
    // console.log(userName);
   
    
}