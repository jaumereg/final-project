const Profile = require( __base + 'models/Profile')

function getProfile( req, res ) {

  Match.find()
    .then( profile => res.json(profile) )

}

module.exports = getProfile
