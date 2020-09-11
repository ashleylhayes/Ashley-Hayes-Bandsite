//get information from API
let COMMENTS_URL = "https://project-1-api.herokuapp.com/comments?api_key=";
let API_KEY = "3830e1e5-4eb0-4af2-932f-4a78fede63c0";

let getData = axios.get(COMMENTS_URL + API_KEY)
.then(response => {
    console.log(response)
})
.catch(error => console.log(error));

//create a variable to represent the form
let form = document.getElementById('#commentsForm');


let commentContainer1 = document.createElement('div');
commentContainer1.classList = "comments__comment-container-1";
document.querySelector('.comments').appendChild(commentContainer1);
            
let avatarContainer1 = document.createElement('div');
avatarContainer1.classList = "comments__avatar-container";
document.querySelector('.comments__comment-container-1').appendChild(avatarContainer1);
            
let commentInfoContainer1 = document.createElement('div');
commentInfoContainer1.classList = "comments__comment-info-container";
document.querySelector('.comments__comment-container-1').appendChild(commentInfoContainer1);
            
let commentName1 = document.createElement('p');
commentName1.classList = "comments__name";
commentName1.innerText = "Michael Lyons";
document.querySelector('.comments__comment-info-container').appendChild(commentName1);
            
let timestamp1 = document.createElement('p');
timestamp1.classList = "comments__timestamp";
timestamp1.innerText = "12/18/2018";
document.querySelector('.comments__comment-info-container').appendChild(timestamp1);
            
let comment1 = document.createElement('p');
comment1.classList = "comments__comment";
comment1.innerText = "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
document.querySelector('.comments__comment-info-container').appendChild(comment1);