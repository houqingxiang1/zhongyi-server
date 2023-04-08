const {
  sequelize,
  Op
} = require('../config/connect')

const Account = require('./account')
const Treatment = require("./treatment")
const TreatmentCategory = require('./treatmentCategory')
const Body = require('./body')
const Symptom = require('./symptom')
const Question = require('./question')
const Reference = require('./reference')
const Identification = require('./identification')
const Jingluo = require('./jingluo')
const XueweiCategory = require('./xueweiCategory')
const Xuewei = require('./xuewei')
const Food = require('./food')
sequelize.sync({ alter: true }).then(r => console.log('所有模型均已成功同步.'))
module.exports = {
  Op,
  Account,
  Treatment,
  Body,
  Symptom,
  Question,
  Reference,
  Identification,
  TreatmentCategory,
  Jingluo,
  XueweiCategory,
  Xuewei,
  Food
}

