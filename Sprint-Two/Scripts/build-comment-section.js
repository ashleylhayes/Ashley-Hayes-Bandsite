/////Comment 1
//create comment container
let commentContainer1 = document.createElement('div');
//give comment container class name
commentContainer1.className = "comments__comment-container-1";
//append comment container to comments section
document.querySelector('.comments').appendChild(commentContainer1);

//create avatar container
let avatarContainer1 = document.createElement('div');
//give class
avatarContainer1.className = "comments__avatar-container";
//append
document.querySelector('.comments__comment-container-1').appendChild(avatarContainer1);

//create comment info container
let commentInfoContainer1 = document.createElement('div');
//give class name
commentInfoContainer1.className = "comments__comment-info-container";
//append
document.querySelector('.comments__comment-container-1').appendChild(commentInfoContainer1);

//create name
let commentName1 = document.createElement('p');
//give class
commentName1.className = "comments__name";
//add content
commentName1.innerText = "Michael Lyons";
//append
document.querySelector('.comments__comment-info-container').appendChild(commentName1);

//create timestamp
let timestamp1 = document.createElement('p');
//give class
timestamp1.className = "comments__timestamp";
//add content
timestamp1.innerText = "12/18/2018";
//append
document.querySelector('.comments__comment-info-container').appendChild(timestamp1);

//create comment
let comment1 = document.createElement('p');
//give class
comment1.className = "comments__comment";
//add content
comment1.innerText = "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
//append
document.querySelector('.comments__comment-info-container').appendChild(comment1);

/////Comment 2
let commentContainer2 = document.createElement('div');
commentContainer2.className = "comments__comment-container-2";
document.querySelector('.comments').appendChild(commentContainer2);

let avatarContainer2 = document.createElement('div');
avatarContainer2.className = "comments__avatar-container";
document.querySelector('.comments__comment-container-2').appendChild(avatarContainer2);

let commentInfoContainer2 = document.createElement('div');
commentInfoContainer2.className = "comments__comment-info-container-2";
document.querySelector('.comments__comment-container-2').appendChild(commentInfoContainer2);

let commentName2 = document.createElement('p');
commentName2.className = "comments__name";
commentName2.innerText = "Gary Wong";
document.querySelector('.comments__comment-info-container-2').appendChild(commentName2);

let timestamp2 = document.createElement('p');
timestamp2.className = "comments__timestamp";
timestamp2.innerText = "12/12/2018";
document.querySelector('.comments__comment-info-container-2').appendChild(timestamp2);

let comment2 = document.createElement('p');
comment2.className = "comments__comment";
comment2.innerText = "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!";
document.querySelector('.comments__comment-info-container-2').appendChild(comment2);

/////Comment 3
let commentContainer3 = document.createElement('div');
commentContainer3.className = "comments__comment-container-3";
document.querySelector('.comments').appendChild(commentContainer3);

let avatarContainer3 = document.createElement('div');
avatarContainer3.className = "comments__avatar-container";
document.querySelector('.comments__comment-container-3').appendChild(avatarContainer3);

let commentInfoContainer3 = document.createElement('div');
commentInfoContainer3.className = "comments__comment-info-container-3";
document.querySelector('.comments__comment-container-3').appendChild(commentInfoContainer3);

let commentName3 = document.createElement('p');
commentName3.className = "comments__name";
commentName3.innerText = "Theodore Duncan";
document.querySelector('.comments__comment-info-container-3').appendChild(commentName3);

let timestamp3 = document.createElement('p');
timestamp3.className = "comments__timestamp";
timestamp3.innerText = "11/15/2018";
document.querySelector('.comments__comment-info-container-3').appendChild(timestamp3);

let comment3 = document.createElement('p');
comment3.className = "comments__comment";
comment3.innerText = "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!";
document.querySelector('.comments__comment-info-container-3').appendChild(comment3);

let postedComment1 = [commentName1.innerText, timestamp1.innerText, comment1.innerText];
console.log(postedComment1);

let postedComment2 = [commentName2.innerText, timestamp2.innerText, comment2.innerText];
console.log(postedComment2);

let postedComment3 = [commentName3.innerText, timestamp3.innerText, comment3.innerText];
console.log(postedComment3);

let postedComments = [postedComment1, postedComment2, postedComment3];
console.log(postedComments);

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

let submittedName = document.getElementsByClassName("comments__form-name");
submittedComment.push(submittedName);

let submittedText = document.getElementsByClassName("comments__form-text");
submittedComment.push(submittedText);

// let submittedComment = [SubmittedName, submittedText, datePosted];
// console.log(submittedComment);

let submittedComment = [];
function displayComment(event) {
    event.preventDefault();
    submittedCommentName.getElementsByClassName("comments__form-name") = event.target.name.value;
    submittedCommentComment.getElementsByClassName("comments__form-text") = event.target.comment.value;
    datePosted('/');
    postedComments.push(submittedComment);
    submitForm.reset();
};


let form  = document.getElementById('commentsForm');
form.addEventListener('submit', (event) => {
});
