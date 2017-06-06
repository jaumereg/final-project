const Match = require( __base + 'models/Match')

function updateMatch (req,res) {
  const { id } = req.params
  const { 
    // name, description, image 
  } = req.body

  const dataToUpdate = {}
  // if (name) dataToUpdate.name = name
  // if (description) dataToUpdate.description = description
  // if (image) dataToUpdate.image = image

  Match.findByIdAndUpdate( id,  dataToUpdate)
    .then( () => res.status(200).json({ msg: `match w/ id ${id} updated properly`}) )
    .catch( () => res.status(500).json({ msg: `error updating  match w/ id ${id} `}) )


}

module.exports = updateMatch