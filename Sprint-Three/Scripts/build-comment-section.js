/////Comments Container

//this needs to go within a function
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


const COMMENTS_URL = "https://project-1-api.herokuapp.com/comments?api_key=";
let API_KEY = "3830e1e5-4eb0-4af2-932f-4a78fede63c0";

let getData = axios.get(COMMENTS_URL + API_KEY)
.then(response => {
    console.log(response)
})
.catch(error => console.log(error));

let submittedComment = [
    {
        name: "Michael Lyons",
        date: "12/18/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    }, 
    
    {
        name: "Gary Wong",
        date: "12/12/2018",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    }, 
    
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    }
];


let form  = document.getElementById('commentsForm');
form.addEventListener('submit', (event) => {
});

const datePosted = function(backslash){
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+backslash+dd+backslash+yyyy);
    };
    console.log(datePosted('/'));



function displayComment(event) {
    event.preventDefault();
    submittedCommentName.getElementsByClassName("comments__form-name") = event.target.name.value;
    submittedCommentComment.getElementsByClassName("comments__form-text") = event.target.comment.value;
    datePosted('/');
    postedComments.push(submittedComment);
    submitForm.reset();
};

//creating a div for the post to go into
function createParentDiv() {
    let commentsPost = document.createElement('div');
    commentsPost.classList.add('comments__post');
    let formReference = document.querySelector('.comments__form');
    formReference.parentNode.insertBefore(commentsPost, formReference.nextElementSibling);
        displayComment();
}
//Invoke function
createParentDiv();

//document.querySelector(“Enter your parent container here”).innerHTML = “”;



    //this has to go into a forEach
let submittedName = document.getElementsByClassName("comments__form-name");
submittedComment.push(submittedName);

let submittedText = document.getElementsByClassName("comments__form-text");
submittedComment.push(submittedText);