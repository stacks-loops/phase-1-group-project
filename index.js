// document.addEventListener("DOMContentLoaded", function() {})

function createArray(info){
    const jamArray = info
    console.log(jamArray)
    return jamArray
}

function renderJamEvents(jamArray) {

let jamContainer = document.querySelector("#jam-cards")

jamArray.forEach((jamObj) => {

   
    const jamDiv = document.createElement('div')
    jamDiv.className = "jam-information"

    const jamEventName = document.createElement('h2')
    const jamArtistName = document.createElement('h2')
    const jamDate = document.createElement('h3')
    const jamVenue = document.createElement('h3')
    const jamImage = document.createElement('img')

    console.log(jamObj.image)

    jamEventName.innerText = jamObj.name
    jamArtistName.innerText = jamObj.performer[0].name
    jamDate.innerText = jamObj.endDate
    jamVenue.innerText = jamObj.location.name
    jamImage.src = jamObj.image

    jamDiv.append(jamEventName, jamArtistName, jamDate, jamVenue, jamImage)
    jamContainer.appendChild(jamDiv)

    })
}

//Button work
let eventButton = document.getElementById("myBtn")


//Button event listener
const init = () => {
    eventButton.addEventListener('click', function() {
        fetch("https://www.jambase.com/jb-api/v1/events?apikey=93f5cc80-f6d0-4f03-a4c7-fce468ed501d")
        .then(resp => resp.json())
        .then(data => renderJamEvents(data.events))
    
        // alert('Clicked!')
                                                    });
                    }
document.addEventListener("DOMContentLoaded", init);

//JSON Fetch
fetch('http://localhost:3000/featured-events')
.then(resp => resp.json())
.then(featuredEventsArr => renderFeaturedEvents(featuredEventsArr))
// taking in the array from our local fetch
// creating a container that will point to the div featured-events 
// can style the look of each event here
// iterate through the array and create a concert card for each object
// create a variable that creates space for each data in the DOM each loop
// set the appropriate attribute of each variable to the data in the object
// append the data to the container
//append the container to the featured-events div 
function renderFeaturedEvents(featuredEventsArray) {
    const featuredCon = document.querySelector('#featured-events')

    featuredEventsArray.forEach((featuredObj) => {
        const featuredDiv = document.createElement('div')
        featuredDiv.className = "concert-card"
    const featName = document.createElement('h2')
    const featArtist = document.createElement('h2')
    const featVenue = document.createElement('h3')
    const featDate = document.createElement('h3')
    const featImg = document.createElement('img')
    const likeButton = document.createElement('button')
    const likeCounter = document.createElement('p')
    
   // likeCounter.textContent = featuredObj.like
    featName.textContent = featuredObj.name
    featArtist.textContent = featuredObj.artist
    featVenue.textContent = featuredObj.venue
    featDate.textContent = featuredObj.date
    featImg.src = featuredObj.image
    // likeCounter.className = "like"

        featuredDiv.append(featName, featArtist, featVenue, featDate, featImg, likeCounter, likeButton)
        featuredCon.appendChild(featuredDiv)




}

// })
