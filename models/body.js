const { sequelize, DataTypes } = require("../config/connect")
const Body = sequelize.define(
    "aw_body",
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
      
      common_crowd: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '常见人群'
      },
      common_manifestations: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '常见表现'
      },
      
      nursing_way: {
        type: DataTypes.JSON,
        allowNull: false,
        comment: '调养方式',
      },
      
      nursing_way_key: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: '其他调养方式',
      },
      uni_key: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '唯一ID'
      },
      
      
    }, {
      timestamps: true,      
      // 不想要 createdAt
      createdAt: 'create_time',      
      // 想要 updatedAt 但是希望名称叫做 updateTimestamp
      updatedAt: 'update_time'
    }
)


module.exports = Body
