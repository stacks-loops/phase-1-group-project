
document.addEventListener("DOMContentLoaded", function() {})



// function createArray(info){
//     const jamArray = info
//     console.log(jamArray)
//     return jamArray
// }


function renderJamEvents(jamArray) {
let jamContainer = document.querySelector("#jam-cards")

jamArray.forEach((jamObj) => {
   
    const jamDiv = document.createElement('div')
    jamDiv.className = "jam-information"

    const jamEventName = document.createElement('h3')
    const jamArtistName = document.createElement('h3')
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
document.addEventListener("DOMContentLoaded", init) ;

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

    featuredEventsArray.forEach((featuredObj, index) => {
        const featuredDiv = document.createElement('div')
        featuredDiv.className = "concert-card"
    const featName = document.createElement('h2')
    const featArtist = document.createElement('h2')
    const featVenue = document.createElement('h3')
    const featDate = document.createElement('h3')
    const featImg = document.createElement('img')
    const likeButton = document.createElement('button')
    const likeCounter = document.createElement('p')

    const localStorageKey = `likes_${index}`
    let likes = parseInt(localStorage.getItem(localStorageKey), 10) || 0
        
    
    likeCounter.textContent = likes
    featName.textContent = featuredObj.name
    featArtist.textContent = featuredObj.artist
    featVenue.textContent = featuredObj.venue
    featDate.textContent = featuredObj.date
    featImg.src = featuredObj.image

    likeButton.textContent = 'Like this Show'
    likeButton.id = "like-button"
    likeButton.addEventListener('click', () => {
        likes++
        localStorage.setItem(localStorageKey, likes)
        likeCounter.textContent = likes.toString()

        const resetButton = document.getElementById('reset-button');
        resetButton.addEventListener('click', resetLikes)
    })

    const comments = document.createElement('div')
    const commentInput = document.createElement('input')
    const commentButton = document.createElement('button')

    comments.className = 'comments'
    commentInput.type = 'text'
    commentInput.placeholder = "Thoughts on the show?"
    commentButton.textContent = "Post"

    comments.append(commentInput, commentButton)
    commentButton.addEventListener('click', () => {
            const commentText = commentInput.value
            const commentObj = {
                text: commentText,
                eventId: featuredObj.id
            }
  saveComment(commentObj, comments)
    })

        featuredDiv.append(featName, featArtist, featVenue, featDate, featImg, likeCounter, likeButton, comments)
        featuredCon.appendChild(featuredDiv)

        renderComments(featuredObj.id, comments)
    })
    //return likes 
}

//RESET BUTTON => Will reset ALL likes in localStorage to 0

function resetLikes() {
    window.localStorage.clear()
    location.reload()
  }

    // function resetLikes() {
    //     window.localStorage.clear();
    //     const concertCards = document.querySelectorAll('.concert-card');
    //     if (concertCards.length > 0) {
    //         concertCards.forEach ((featuredObj, index) => {
    //             const localStorageKey = `likes_${index}`   
    //             const likeCounterZero = featuredObj.querySelector('.like-counter')
    //             if (likeCounterZero) {
    //                 localStorage.setItem(localStorageKey, 0) 
    //                 likeCounterZero.innerText = 0

    //                 const likeButton = featuredObj.querySelector('#like-button')
    //                 const fakeClick = new Event('click')
    //                 likeButton.dispatchEvent(fakeClick)
    //             }
    //         })
    //     }
              
    // }
 

//Up key goes to top of the page
function goTop(e) {
    if (e.keyCode === 38) {
      document.documentElement.scrollTop = 0;
      }
    }
  document.addEventListener('keydown', goTop);


//append an event from upcoming to the db.json and have it persist
function saveComment(commentObj, comments) {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
   'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
      .then((resp) => resp.json())
      .then((data) => {
        renderComments(commentObj.eventId, comments)
        commentObj.textContent - ""
        commentObj.clear
     
      })
  }

function renderComments(eventId, comments) {
    fetch(`http://localhost:3000/comments?eventId=${eventId}`)
    .then((resp) => resp.json())
    .then((commentsTwo) => {
            commentsTwo.forEach((comment) => {
                const commentElement = document.createElement('p')
                commentElement.textContent = comment.text
                comments.appendChild(commentElement)

        })
    })
    .catch((error) => {
        console.log('Error is:', error)

        document.addEventListener("DOMContentLoaded", function() {})

// function createArray(info){
//     const jamArray = info
//     console.log(jamArray)
//     return jamArray
// }

function renderJamEvents(jamArray) {
let jamContainer = document.querySelector("#jam-cards")

jamArray.forEach((jamObj) => {
   
    const jamDiv = document.createElement('div')
    jamDiv.className = "jam-information"

    const jamEventName = document.createElement('h3')
    const jamArtistName = document.createElement('h3')
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
document.addEventListener("DOMContentLoaded", init) ;

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

    featuredEventsArray.forEach((featuredObj, index) => {
        const featuredDiv = document.createElement('div')
        featuredDiv.className = "concert-card"
    const featName = document.createElement('h2')
    const featArtist = document.createElement('h2')
    const featVenue = document.createElement('h3')
    const featDate = document.createElement('h3')
    const featImg = document.createElement('img')
    const likeButton = document.createElement('button')
    const likeCounter = document.createElement('p')

    likeCounter.id = "like-counter";

    const localStorageKey = `likes_${index}`
    let likes = parseInt(localStorage.getItem(localStorageKey), 10) || 0
        
    
    likeCounter.textContent = likes
    featName.textContent = featuredObj.name
    featArtist.textContent = featuredObj.artist
    featVenue.textContent = featuredObj.venue
    featDate.textContent = featuredObj.date
    featImg.src = featuredObj.image

    likeButton.textContent = 'Like this Show'
    likeButton.id = "like-button"
    likeButton.addEventListener('click', () => {
        likes++
        localStorage.setItem(localStorageKey, likes)
        likeCounter.textContent = likes.toString()
    })

    const comments = document.createElement('div')
    const commentInput = document.createElement('input')
    const commentButton = document.createElement('button')

    comments.className = 'comments'
    commentInput.type = 'text'
    commentInput.placeholder = "Thoughts on the show?"
    commentButton.textContent = "Post"

    comments.append(commentInput, commentButton)
    commentButton.addEventListener('click', () => {
            const commentText = commentInput.value
            const commentObj = {
                text: commentText,
                eventId: featuredObj.id
            }
    saveComment(commentObj, comments)
    })

        featuredDiv.append(featName, featArtist, featVenue, featDate, featImg, likeCounter, likeButton, comments)
        featuredCon.appendChild(featuredDiv)

        renderComments(featuredObj.id, comments)
    })
    //return likes 
}

//RESET BUTTON => Will reset ALL likes in localStorage to 0

    function resetLikes() {
        console.log('reseting likes');
        window.localStorage.clear();
        const concertCards = document.querySelectorAll('.concert-card');
        if (concertCards.length > 0) {
            concertCards.forEach ((featuredDiv, index) => {
                const localStorageKey = `likes_${index}`   

                const likeCounterZero = featuredDiv.querySelector('#like-counter')

                if (likeCounterZero) {
                    localStorage.setItem(localStorageKey, 0) 
                    likeCounterZero.innerText = 0


                    //const likeButton = document.querySelector('#like-button')
                    //const fakeClick = new Event('click')
                    //likeButton.dispatchEvent(fakeClick)

                }
            });
        }
              
    }
    let resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetLikes);

//Up key goes to top of the page
function goTop(e) {
    if (e.keyCode === 38) {
      document.documentElement.scrollTop = 0;
      }
    }
  document.addEventListener('keydown', goTop);


//append an event from upcoming to the db.json and have it persist
function saveComment(commentObj, comments) {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
   'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
      .then((resp) => resp.json())
      .then((data) => {
        renderComments(commentObj.eventId, comments)
        commentObj.textContent - ""
     
      })
  }

function renderComments(eventId, comments) {
    fetch(`http://localhost:3000/comments?eventId=${eventId}`)
    .then((resp) => resp.json())
    .then((commentsTwo) => {
            commentsTwo.forEach((comment) => {
                const commentElement = document.createElement('p')
                commentElement.textContent = comment.text
                comments.appendChild(commentElement)

        })
        const resetButton = document.getElementById('reset-button')
        resetButton.addEventListener('click', resetLikes)
    })
    .catch((error) => {
        console.log('Error is:', error)


    })


    
}
document.addEventListener("DOMContentLoaded", function() {})


//}

    })


    
}


//}

