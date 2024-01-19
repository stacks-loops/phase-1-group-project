fetch("https://www.jambase.com/jb-api/v1/events?apikey=93f5cc80-f6d0-4f03-a4c7-fce468ed501d")
.then(resp => resp.json())
.then(data => console.log(data))


