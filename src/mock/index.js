let Mock = require('mockjs');

const Random = Mock.Random;

// const students = function () {
//   let data = [];
//   for (let i = 0;i < 10; i++) {
//       let p = {
//           name: Random.cname(),
//           age: Random.natural(20,30)
//       }
//       data.push(p)
//   }
//   return {
//       data: data,
//       status: 0
//   }
// }

// Mock.mock('/email', 'post', students);


module.exports = function () {
  let data = {
      result: {
          list: [],
          status: 0,
          msg:'result 获取成功'
      },
      result2: {
          status: 0,
          data: []
      },
      getSessionSuccess: {
          userName: 'fass',
          status: 0,
          msg:'session 获取成功'
      },
      getSessionFail: {
          userName: null,
          status: -2,
          msg:'session 获取失败，请重新登录！'
      },
      login: {
          userName: 'fass',
          status: 0,
          msg:'登录成功'
      },
      logout: {
          userName: null,
          status: 0,
          msg:'退出成功'
      },
      create: {
          userName: 'xiaoming',
          status: 0,
          msg:'注册成功'
      },
  };
  for (let i = 0;i < 5; i++) {
      let p = {
          id: i,
          name: Random.cname(),
          age: Random.natural(20,30)
      }
      data.result2.data.push(p)
  }
  return data;
}
