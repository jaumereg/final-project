const Match = require( __base + 'models/Match')

function addMatch( req, res ) {
  const { 
    // name, description, image 
  } = req.body
  const Match = new Match( { 
    // name, description, image 
  } )
  Match.save()
    .then( () => res.status(200).json({ msg: 'match inserted properly'}) )
    .catch( () => res.status(500).json({ msg: 'error inserting match'}) )
}

module.exports = addMatch
