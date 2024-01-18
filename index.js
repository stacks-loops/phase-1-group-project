fetch('https://records.nhl.com/site/api/franchise-team-totals')
.then(resp => resp.json())
.then(data => console.log(data))


