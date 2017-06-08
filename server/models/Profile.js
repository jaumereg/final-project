const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'profiles'

const ProfileSchema = new Schema ({
    name: {
      type: String
      
    },
    description: {
       type: String,
       default: 'Unceiled toxicity Jocelyn slipsloppism perisporiaceous scarn cultured colewort potleg apophorometer copalche hyperbranchia gypsy Mary tiremaking nitranilic naively variolate pectinately minoress galewort sclerosed regas.'       
    },
    image: {
       type: String,
       default: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
       
    }
}, { collection })

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile