const { sequelize, DataTypes } = require("../config/connect")
const Jingluo = sequelize.define(
    "aw_jingluo",
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
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '封面图片',
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



module.exports = Jingluo
