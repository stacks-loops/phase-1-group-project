fetch("https://www.jambase.com/jb-api/v1/events?apikey=93f5cc80-f6d0-4f03-a4c7-fce468ed501d")
.then(resp => resp.json())
.then(data => console.log(data))

fetch('http://localhost:3000/featured-events')
.then(resp => resp.json())
.then(featuredEventsArr => renderFeaturedEvents(featuredEventsArr))

function renderFeaturedEvents(featuredEventsArray) {
    const featuredCon = document.querySelector('#featured-events')

    const featuredDiv = document.createElement('div')
    featuredDiv.className = "concert-card"

    featuredEventsArray.forEach((featuredObj) => {
    const featName = document.createElement('h2')
    const featArtist = document.createElement('h2')
    const featVenue = document.createElement('h3')
    const featDate = document.createElement('h3')
    const featImg = document.createElement('img')

    featName.textContent = featuredObj.name
    featArtist.textContent = featuredObj.artist
    featVenue.textContent = featuredObj.venue
    featDate.textContent = featuredObj.date
    featImg.src = featuredObj.image


    featuredDiv.appendChild(featName)
    featuredDiv.appendChild(featArtist)
    featuredDiv.appendChild(featVenue)
    featuredDiv.appendChild(featDate) 
    featuredDiv.appendChild(featImg)
    featuredCon.appendChild(featuredDiv)



    })

}
