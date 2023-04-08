const { sequelize, DataTypes } = require("../config/connect")
const Symptom = sequelize.define(
    "aw_symptom",
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
        type: DataTypes.JSON,
        allowNull: false,
        comment: '描述',
      },
      uni_key: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '唯一ID'
      },
      uni_body_key: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '唯一体质ID'
      },
      
    }, {
      timestamps: true,      
      // 不想要 createdAt
      createdAt: 'create_time',      
      // 想要 updatedAt 但是希望名称叫做 updateTimestamp
      updatedAt: 'update_time'
    }
)


module.exports = Symptom
