const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'profiles'

const ProfileSchema = new Schema ({
    name: {
      type: String
      
    },
    description: {
       type: String
       
    },
    image: {
       type: String
       
    }
}, { collection })

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile