const { sequelize, DataTypes } = require("../config/connect")
const Question = sequelize.define(
    "aw_question",
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
      options:{
        type: DataTypes.JSON,
        allowNull: false,
        comment: '答案选项',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: '答案描述',
      },      
      uni_key: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '唯一ID'
      },
      uni_body_key: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '对应体质ID'
      },
      level: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: '程度'
      }
      
    }, {
      timestamps: true,      
      // 不想要 createdAt
      createdAt: 'create_time',      
      // 想要 updatedAt 但是希望名称叫做 updateTimestamp
      updatedAt: 'update_time'
    }
)


module.exports = Question
