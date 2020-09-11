//get information from API
let COMMENTS_URL = "https://project-1-api.herokuapp.com/comments?api_key=";
let API_KEY = "3830e1e5-4eb0-4af2-932f-4a78fede63c0";

//create a variable to represent the form
let form = document.getElementById('#commentsForm');

function createParentDiv() {
let commentsPost = document.createElement('div');
commentsPost.classList.add('comments__post');
let formReference = document.querySelector('.comments__form');
formReference.parentNode.insertBefore(commentsPost, formReference.nextElementSibling);
}

createParentDiv()

let getData = axios.get(COMMENTS_URL + API_KEY)
.then(response => {
    console.log(response)

    response.data.forEach(comment => {

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
        commentName1.innerText = comment.name;
        document.querySelector('.comments__comment-info-container').appendChild(commentName1);
                    
        let timestamp1 = document.createElement('p');
        timestamp1.classList = "comments__timestamp";
        timestamp1.innerText = comment.timestamp;
        document.querySelector('.comments__comment-info-container').appendChild(timestamp1);
                    
        let comment1 = document.createElement('p');
        comment1.classList = "comments__comment";
        comment1.innerText = comment.comment;
        document.querySelector('.comments__comment-info-container').appendChild(comment1);
    })

})
.catch(error => console.log(error));