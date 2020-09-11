//create shows title
let showsTitle = document.createElement('h2');
//assign class
showsTitle.classList = "shows__title";
//add content
showsTitle.innerText = "Shows";
//append
document.querySelector('.shows').appendChild(showsTitle);




let SHOWS_URL = "https://project-1-api.herokuapp.com/showdates?api_key=";
let API_KEY = "3830e1e5-4eb0-4af2-932f-4a78fede63c0";

axios.get(SHOWS_URL + API_KEY)
.then(response => {
    console.log(response)

    response.data.forEach(show => {

        //parent container for all show info
        let showsContainer1 = document.createElement('div');
        showsContainer1.classList = "shows__container-1";
        document.querySelector('.shows').appendChild(showsContainer1);
        //date title
        let dateTitle1 = document.createElement('p');
        dateTitle1.classList = "shows__date-title";
        dateTitle1.innerText = "DATE";
        document.querySelector('.shows__container-1').appendChild(dateTitle1);
        //date of show
        let date1 = document.createElement('p');
        date1.classList = "shows__date";
        date1.innerText = show.date;
        document.querySelector('.shows__container-1').appendChild(date1);
        //venue title
        let venueTitle1 = document.createElement('p');
        venueTitle1.classList = "shows__venue-title";
        venueTitle1.innerText = "VENUE";
        document.querySelector('.shows__container-1').appendChild(venueTitle1);
        //venue of show
        let venue1 = document.createElement('p');
        venue1.classList = "shows__venue";
        venue1.innerText = show.place;
        document.querySelector('.shows__container-1').appendChild(venue1);
        //location title
        let locationTitle1 = document.createElement('p');
        locationTitle1.classList = "shows__location-title";
        locationTitle1.innerText = "LOCATION";
        document.querySelector('.shows__container-1').appendChild(locationTitle1);
        //location of show
        let location1 = document.createElement('p');
        location1.classList = "shows__location";
        location1.innerText = show.location;
        document.querySelector('.shows__container-1').appendChild(location1);
        //buy tickets button
        let buyButton1 = document.createElement('button');
        buyButton1.classList = "shows__button";
        buyButton1.innerText = "BUY TICKETS";
        document.querySelector('.shows__container-1').appendChild(buyButton1);
    })

})
.catch(error => console.log(error));

//Need to create a new version of date, venue, and location titles that will only display at the top for tablet and desktop breakpoints.