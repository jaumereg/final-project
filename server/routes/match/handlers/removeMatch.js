const Match = require( __base + 'models/Match')

function removeMatch (req,res) {
  const { id } = req.params
  Match.findByIdAndRemove( id )
    .then( () => res.status(200).json({ msg: `match w/ id ${id} removed properly`}) )
    .catch( () => res.status(500).json({ msg: `error removing  match w/ id ${id} `}) )


}

module.exports = removeMatch