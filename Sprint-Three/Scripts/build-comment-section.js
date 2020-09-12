//get information from API
let COMMENTS_URL = "https://project-1-api.herokuapp.com/comments?api_key=";
let API_KEY = "3830e1e5-4eb0-4af2-932f-4a78fede63c0";
let getData = COMMENTS_URL + API_KEY;

//create a variable to represent the form
let form = document.querySelector(".comments__form");

let submittedComment = {};
let commentsArray = [];

function displayComment(event) {
    submittedComment.name = event.target.name.value;
    submittedComment.comment = event.target.comment.value;
    form.reset();
};

function commentsPost() {
    axios.get(getData)
    .then(response => {
        commentsArray = response.data;
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    commentsPost(submittedComment);
    displayComment(event);
    axios.post(getData, submittedComment)
});


function createParentContainer() {
let commentsPost = document.createElement('div');
commentsPost.classList.add('comments__post');
let formReference = document.querySelector('.comments__form-container');
formReference.parentNode.insertBefore(commentsPost, formReference.nextElementSibling);
}


axios.get(getData)
.then(response => {
    console.log(response)

    response.data.forEach(comment => {

        createParentContainer()

        let commentContainer1 = document.createElement('div');
        commentContainer1.classList.add("comments__comment-container-1");
        document.querySelector('.comments__post').appendChild(commentContainer1);
                    
        let avatarContainer1 = document.createElement('div');
        avatarContainer1.classList.add("comments__avatar-container");
        document.querySelector('.comments__comment-container-1').appendChild(avatarContainer1);
                    
        let commentInfoContainer1 = document.createElement('div');
        commentInfoContainer1.classList.add("comments__comment-info-container");
        document.querySelector('.comments__comment-container-1').appendChild(commentInfoContainer1);
                    
        let commentName1 = document.createElement('p');
        commentName1.classList.add("comments__name");
        commentName1.innerText = comment.name;
        document.querySelector('.comments__comment-info-container').appendChild(commentName1);
                    
        let timestamp1 = document.createElement('p');
        timestamp1.classList.add("comments__timestamp");
        timestamp1.innerText = comment.timestamp;
        document.querySelector('.comments__comment-info-container').appendChild(timestamp1);
                    
        let comment1 = document.createElement('p');
        comment1.classList.add("comments__comment");
        comment1.innerText = comment.comment;
        document.querySelector('.comments__comment-info-container').appendChild(comment1);
    })

})
.catch(error => console.log(error));