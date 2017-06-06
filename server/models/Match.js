const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'matches'

const MatchSchema = new Schema ({
    location: {
      type: String,
      required: true
    },
    court: {
       type: String,
       required: true
    },
    date: {
       type: Number,
       required: true
    },
    hour: {
       type: Number,
       required: true
    },
    price: {
       type: Number,
       required: true
    },
    levelFrom: {
       type: String,
       required: true
    },
    levelTo: {
       type: String,
       required: true
    },
    gender: {
       type: String,
       required: true
    },
    team1Left: {
       type: String,
       required: true
    },
    team1Right: {
       type: String,
       required: true
    },
    team2Left: {
       type: String,
       required: true
    },
    team2Right: {
       type: String,
       required: true
    }
}, { collection })

const Match = mongoose.model('Match', MatchSchema)

module.exports = Match