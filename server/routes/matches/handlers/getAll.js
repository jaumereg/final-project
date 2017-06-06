const Match = require( __base + 'models/Match')

function getAll( req, res ) {

  Match.find()
    .then( matches => res.json(matches) )

}

module.exports = getAll
