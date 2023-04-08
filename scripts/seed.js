const { Role } = require('../models/role'); // 引入模型

const roles = [
  { name: 'admin',description:'Admin', state: 1 },
  { name: 'normal',description:'normal', state: 1 },
];

const seed = async () => {
  await Role.bulkCreate(roles); // 批量插入用户role
  console.log('Seed complete!');
};

seed();