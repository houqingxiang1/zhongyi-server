const { sequelize } = require("../config/connect")
 require('../models')
sequelize.sync()