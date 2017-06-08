const Profile = require( __base + 'models/Profile')

function getAll( req, res ) {

  Profile.find()
    .then( profile => res.json(profile) )

}

module.exports = getAll
