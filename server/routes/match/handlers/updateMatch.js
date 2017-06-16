const Match = require( __base + 'models/Match')

function updateMatch (req,res) {
  const { id } = req.params
  const { location, court, date, duration, hour, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right } = req.body

  const dataToUpdate = {}
  if (location) dataToUpdate.location = location
  if (court) dataToUpdate.court = court
  if (date) dataToUpdate.date = date
  if (duration) dataToUpdate.duration = duration
  if (hour) dataToUpdate.hour = hour
  if (price) dataToUpdate.price = price
  if (levelFrom) dataToUpdate.levelFrom = levelFrom
  if (gender) dataToUpdate.gender = gender
  if (team1Left) dataToUpdate.team1Left = team1Left
  if (team1Right) dataToUpdate.team1Right = team1Right
  if (team2Left) dataToUpdate.team2Left = team2Left
  if (team2Right) dataToUpdate.team2Right = team2Right

  Match.findByIdAndUpdate( id,  dataToUpdate)
    .then( () => res.status(200).json({ msg: `match w/ id ${id} updated properly`}) )
    .catch( () => res.status(500).json({ msg: `error updating  match w/ id ${id}`}) )

}

module.exports = updateMatch