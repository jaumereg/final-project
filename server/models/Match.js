const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'matches'

const MatchSchema = new Schema ({
    location: {
      type: String
      
    },
    court: {
       type: String
       
    },
    date: {
       type: Number
       
    },
    hour: {
       type: Number
       
    },
    price: {
       type: Number
       
    },
    levelFrom: {
       type: String
       
    },
    levelTo: {
       type: String
       
    },
    gender: {
       type: String
       
    },
    team1Left: {
       type: String
       
    },
    team1Right: {
       type: String
       
    },
    team2Left: {
       type: String
       
    },
    team2Right: {
       type: String
       
    }
}, { collection })

const Match = mongoose.model('Match', MatchSchema)

module.exports = Match