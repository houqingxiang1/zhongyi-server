const { sequelize, DataTypes } = require("../config/connect")
const Food = sequelize.define(
    "aw_food",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false, // 是否允许为空
        autoIncrement: true,
        primaryKey: true, // 是否主键
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '名称'
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: '描述',
      },     
      
    }, {
      timestamps: true,      
      // 不想要 createdAt
      createdAt: 'create_time',      
      // 想要 updatedAt 但是希望名称叫做 updateTimestamp
      updatedAt: 'update_time'
    }
)


module.exports = Food
