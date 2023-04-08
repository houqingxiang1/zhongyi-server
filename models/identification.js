const { sequelize, DataTypes } = require("../config/connect")
const Identification = sequelize.define(
    "aw_identification",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false, // 是否允许为空
        autoIncrement: true,
        primaryKey: true, // 是否主键
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户名'
      },
      result: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: '辩证结果'
      },  
      record: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: '用户所答题目'
      },  
      
      
      
    }, {
      timestamps: true,      
      // 不想要 createdAt
      createdAt: 'create_time',      
      // 想要 updatedAt 但是希望名称叫做 updateTimestamp
      updatedAt: 'update_time'
    }
)


module.exports = Identification
