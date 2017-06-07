const Profile = require( __base + 'models/Profile')

function updateProfile (req,res) {
  const { id } = req.params
  const { name, description, image } = req.body

  const dataToUpdate = {}
  if (name) dataToUpdate.name = name
  if (description) dataToUpdate.description = description
  if (image) dataToUpdate.image = image

  Profile.findByIdAndUpdate( id,  dataToUpdate)
    .then( () => res.status(200).json({ msg: `profile w/ id ${id} updated properly`}) )
    .catch( () => res.status(500).json({ msg: `error updating  profile w/ id ${id} `}) )

}

module.exports = updateProfile