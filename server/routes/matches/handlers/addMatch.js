const Match = require( __base + 'models/Match')

function addMatch( req, res ) {
  let {location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right} = req.body
  if (!date) {
    date = '16 - 06 - 2017'
  }
  if (!hour) {
    hour = "17:00"
  }
  const match = new Match( {location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right} )
  match.save()
    .then( () => res.status(200).json({ msg: 'match inserted properly'}) )
    .catch( () => res.status(500).json({ msg: 'error inserting match'}) )
}

module.exports = addMatch
