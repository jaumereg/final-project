const Match = require( __base + 'models/Match')
const moment = require('moment')

function addMatch( req, res ) {
  let {location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right} = req.body
  if (!date) {
    date = moment(new Date()).format()
  }
  if (!hour) {
    var hourNow = moment().format('HH')
    hour = moment(new Date(0, 0, 0, hourNow, 0)).format("HH:mm")
  }
  const match = new Match( {location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right} )
  match.save()
    .then( () => res.status(200).json({ msg: 'match inserted properly'}) )
    .catch( () => res.status(500).json({ msg: 'error inserting match'}) )
}

module.exports = addMatch
