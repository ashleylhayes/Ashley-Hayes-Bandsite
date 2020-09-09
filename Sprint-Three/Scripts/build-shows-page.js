//create shows title
let showsTitle = document.createElement('h2');
//assign class
showsTitle.classList = "shows__title";
//add content
showsTitle.innerText = "Shows";
//append
document.querySelector('.shows').appendChild(showsTitle);

/////First Show/////
//create
let showsContainer1 = document.createElement('div');
//assign class
showsContainer1.classList = "shows__container-1";
//append
document.querySelector('.shows').appendChild(showsContainer1);

let dateTitle1 = document.createElement('p');
dateTitle1.classList = "shows__date-title";
dateTitle1.innerText = "DATE";
document.querySelector('.shows__container-1').appendChild(dateTitle1);

let date1 = document.createElement('p');
date1.classList = "shows__date";
date1.innerText = "Mon Dec 17 2018";
document.querySelector('.shows__container-1').appendChild(date1);

let venueTitle1 = document.createElement('p');
venueTitle1.classList = "shows__venue-title";
venueTitle1.innerText = "VENUE";
document.querySelector('.shows__container-1').appendChild(venueTitle1);

let venue1 = document.createElement('p');
venue1.classList = "shows__venue";
venue1.innerText = "Ronald Lane";
document.querySelector('.shows__container-1').appendChild(venue1);

let locationTitle1 = document.createElement('p');
locationTitle1.classList = "shows__location-title";
locationTitle1.innerText = "LOCATION";
document.querySelector('.shows__container-1').appendChild(locationTitle1);

let location1 = document.createElement('p');
location1.classList = "shows__location";
location1.innerText = "San Francisco, CA";
document.querySelector('.shows__container-1').appendChild(location1);

let buyButton1 = document.createElement('button');
buyButton1.classList = "shows__button";
buyButton1.innerText = "BUY TICKETS";
document.querySelector('.shows__container-1').appendChild(buyButton1);



const SHOWS_URL = "https://project-1-api.herokuapp.com/showdates?api_key=";
let API_KEY = "3830e1e5-4eb0-4af2-932f-4a78fede63c0";

let getData = axios.get(SHOWS_URL + API_KEY)
.then(response => {
    console.log(response)
})
.catch(error => console.log(error));






// /////Second Show/////
// //create
// let showsContainer2 = document.createElement('div');
// //assign class
// showsContainer2.className = "shows__container-2";
// //append
// document.querySelector('.shows').appendChild(showsContainer2);

// let dateTitle2 = document.createElement('p');
// dateTitle2.className = "shows__date-title shows__title-tablet";
// dateTitle2.innerText = "DATE";
// document.querySelector('.shows__container-2').appendChild(dateTitle2);

// let date2 = document.createElement('p');
// date2.className = "shows__date";
// date2.innerText = "Tue Jul 18 2019";
// document.querySelector('.shows__container-2').appendChild(date2);

// let venueTitle2 = document.createElement('p');
// venueTitle2.className = "shows__venue-title shows__title-tablet";
// venueTitle2.innerText = "VENUE";
// document.querySelector('.shows__container-2').appendChild(venueTitle2);

// let venue2 = document.createElement('p');
// venue2.className = "shows__venue";
// venue2.innerText = "Pier 3 East";
// document.querySelector('.shows__container-2').appendChild(venue2);

// let locationTitle2 = document.createElement('p');
// locationTitle2.className = "shows__location-title shows__title-tablet";
// locationTitle2.innerText = "LOCATION";
// document.querySelector('.shows__container-2').appendChild(locationTitle2);

// let location2 = document.createElement('p');
// location2.className = "shows__location";
// location2.innerText = "San Francisco, CA";
// document.querySelector('.shows__container-2').appendChild(location2);

// let buyButton2 = document.createElement('button');
// buyButton2.className = "shows__button";
// buyButton2.innerText = "BUY TICKETS";
// document.querySelector('.shows__container-2').appendChild(buyButton2);

// /////Third Show/////
// //create
// let showsContainer3 = document.createElement('div');
// //assign class
// showsContainer3.className = "shows__container-3";
// //append
// document.querySelector('.shows').appendChild(showsContainer3);

// let dateTitle3 = document.createElement('p');
// dateTitle3.className = "shows__date-title shows__title-tablet";
// dateTitle3.innerText = "DATE";
// document.querySelector('.shows__container-3').appendChild(dateTitle3);

// let date3 = document.createElement('p');
// date3.className = "shows__date";
// date3.innerText = "Fri Jul 22 2019";
// document.querySelector('.shows__container-3').appendChild(date3);

// let venueTitle3 = document.createElement('p');
// venueTitle3.className = "shows__venue-title shows__title-tablet";
// venueTitle3.innerText = "VENUE";
// document.querySelector('.shows__container-3').appendChild(venueTitle3);

// let venue3 = document.createElement('p');
// venue3.className = "shows__venue";
// venue3.innerText = "View Loungue";
// document.querySelector('.shows__container-3').appendChild(venue3);

// let locationTitle3 = document.createElement('p');
// locationTitle3.className = "shows__location-title shows__title-tablet";
// locationTitle3.innerText = "LOCATION";
// document.querySelector('.shows__container-3').appendChild(locationTitle3);

// let location3 = document.createElement('p');
// location3.className = "shows__location";
// location3.innerText = "San Francisco, CA";
// document.querySelector('.shows__container-3').appendChild(location3);

// let buyButton3 = document.createElement('button');
// buyButton3.className = "shows__button";
// buyButton3.innerText = "BUY TICKETS";
// document.querySelector('.shows__container-3').appendChild(buyButton3);

// /////Fourth Show/////
// //create
// let showsContainer4 = document.createElement('div');
// //assign class
// showsContainer4.className = "shows__container-4";
// //append
// document.querySelector('.shows').appendChild(showsContainer4);

// let dateTitle4 = document.createElement('p');
// dateTitle4.className = "shows__date-title shows__title-tablet";
// dateTitle4.innerText = "DATE";
// document.querySelector('.shows__container-4').appendChild(dateTitle4);

// let date4 = document.createElement('p');
// date4.className = "shows__date";
// date4.innerText = "Sat Aug 12 2019";
// document.querySelector('.shows__container-4').appendChild(date4);

// let venueTitle4 = document.createElement('p');
// venueTitle4.className = "shows__venue-title shows__title-tablet";
// venueTitle4.innerText = "VENUE";
// document.querySelector('.shows__container-4').appendChild(venueTitle4);

// let venue4 = document.createElement('p');
// venue4.className = "shows__venue";
// venue4.innerText = "Hyatt Agency";
// document.querySelector('.shows__container-4').appendChild(venue4);

// let locationTitle4 = document.createElement('p');
// locationTitle4.className = "shows__location-title shows__title-tablet";
// locationTitle4.innerText = "LOCATION";
// document.querySelector('.shows__container-4').appendChild(locationTitle4);

// let location4 = document.createElement('p');
// location4.className = "shows__location";
// location4.innerText = "San Francisco, CA";
// document.querySelector('.shows__container-4').appendChild(location4);

// let buyButton4 = document.createElement('button');
// buyButton4.className = "shows__button";
// buyButton4.innerText = "BUY TICKETS";
// document.querySelector('.shows__container-4').appendChild(buyButton4);

// /////Fifth Show/////
// //create
// let showsContainer5 = document.createElement('div');
// //assign class
// showsContainer5.className = "shows__container-5";
// //append
// document.querySelector('.shows').appendChild(showsContainer5);

// let dateTitle5 = document.createElement('p');
// dateTitle5.className = "shows__date-title shows__title-tablet";
// dateTitle5.innerText = "DATE";
// document.querySelector('.shows__container-5').appendChild(dateTitle5);

// let date5 = document.createElement('p');
// date5.className = "shows__date";
// date5.innerText = "Fri Sep 5 2019";
// document.querySelector('.shows__container-5').appendChild(date5);

// let venueTitle5 = document.createElement('p');
// venueTitle5.className = "shows__venue-title shows__title-tablet";
// venueTitle5.innerText = "VENUE";
// document.querySelector('.shows__container-5').appendChild(venueTitle5);

// let venue5 = document.createElement('p');
// venue5.className = "shows__venue";
// venue5.innerText = "Moscow Center";
// document.querySelector('.shows__container-5').appendChild(venue5);

// let locationTitle5 = document.createElement('p');
// locationTitle5.className = "shows__location-title shows__title-tablet";
// locationTitle5.innerText = "LOCATION";
// document.querySelector('.shows__container-5').appendChild(locationTitle5);

// let location5 = document.createElement('p');
// location5.className = "shows__location";
// location5.innerText = "San Francisco, CA";
// document.querySelector('.shows__container-5').appendChild(location5);

// let buyButton5 = document.createElement('button');
// buyButton5.className = "shows__button";
// buyButton5.innerText = "BUY TICKETS";
// document.querySelector('.shows__container-5').appendChild(buyButton5);

// /////Sixth Show/////
// //create
// let showsContainer6 = document.createElement('div');
// //assign class
// showsContainer6.className = "shows__container-6";
// //append
// document.querySelector('.shows').appendChild(showsContainer6);

// let dateTitle6 = document.createElement('p');
// dateTitle6.className = "shows__date-title shows__title-tablet";
// dateTitle6.innerText = "DATE";
// document.querySelector('.shows__container-6').appendChild(dateTitle6);

// let date6 = document.createElement('p');
// date6.className = "shows__date";
// date6.innerText = "Wed Aug 11 2019";
// document.querySelector('.shows__container-6').appendChild(date6);

// let venueTitle6 = document.createElement('p');
// venueTitle6.className = "shows__venue-title shows__title-tablet";
// venueTitle6.innerText = "VENUE";
// document.querySelector('.shows__container-6').appendChild(venueTitle6);

// let venue6 = document.createElement('p');
// venue6.className = "shows__venue";
// venue6.innerText = "Pres Club";
// document.querySelector('.shows__container-6').appendChild(venue6);

// let locationTitle6 = document.createElement('p');
// locationTitle6.className = "shows__location-title shows__title-tablet";
// locationTitle6.innerText = "LOCATION";
// document.querySelector('.shows__container-6').appendChild(locationTitle6);

// let location6 = document.createElement('p');
// location6.className = "shows__location";
// location6.innerText = "San Francisco, CA";
// document.querySelector('.shows__container-6').appendChild(location6);

// let buyButton6 = document.createElement('button');
// buyButton6.className = "shows__button";
// buyButton6.innerText = "BUY TICKETS";
// document.querySelector('.shows__container-6').appendChild(buyButton6);


// let show = [showsContainer1, dateTitle1, date1, venueTitle1, venue1, locationTitle1, location1, buyButton1];
// console.log(show);

// document.querySelector('.shows').append(show);

////empty array//get data function//populate//eventlistener