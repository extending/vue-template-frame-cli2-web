// let a = {
//   i: 1,
//   valueOf() {
//     console.log(this)
//     return this
//   },
//   toString() {
//     console.log(this.i)
//     return this.i++
//   }
// }
// console.time(1)
// if(a == 1 && a == 2 && a == 3) {
//   console.log('hello world')
// }
// console.timeEnd(1)

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// console.time('for')
// for(let i = 1; i < arr.length; i++) {

// }
// console.timeEnd('for')

// console.time('forEach')
// arr.forEach((item) => {

// })
// console.timeEnd('forEach')

// console.time('find')
// let item1 = arr.find(item => item === 3)
// console.timeEnd('find')

// console.time('filter')
// let item2 = arr.filter(item => item === 3)
// console.timeEnd('filter')

// console.group('一级分组');
// console.log('一级分组的内容');

// console.group('二级分组');
// console.log('二级分组的内容');
// console.groupEnd(); // 二级分组结束

// console.log('一级分组的内容二');
// console.groupEnd(); // 一级分组结束

let moment = require('moment')

// console.log(moment(moment().format('YYYY-MM-DD HH:mm:ss')))

let list = [
  {name: "xm", subname: "zb", year: 21, status: 1},
  {name: "zx", subname: "hu", year: 22, status: 1},
  {name: "qw", subname: "ui", year: 23, status: 1},
  {name: "zb", subname: "xm", year: 24, status: 0}
]
let list2 = [...list]

let sameValindex, finalIndex, arr = []
// list2.forEach(item => {
//   sameValindex = list.findIndex(i => ((i.name == item.subname) && (i.subname == item.name)))
//   if(sameValindex > -1) {
//     //list[sameValindex].status === 1
//     finalIndex = sameValindex
//     console.log(/sameValindex /, sameValindex)
//     arr.push({
//       key: sameValindex,
//       val: list[sameValindex]
//     })
//   }
// })
// console.log('final ', finalIndex)
// console.log('arr ', arr)
// list.splice(sameValindex, 1)
// console.log(list)

const arr3 = [
  {
    id: 1111,
    name: '123'
  },
  {
    id: 1111,
    name: '123'
  },
  {
    id: 1112,
    name: '2'
  },
  {
    id: 1113,
    name: '3'
  },
  {
    id: 1114,
    name: '4'
  }
]

function unique(arr, key) {
  let list = []
  let list2 = []
  arr.forEach((item, index) => {
    if (list.indexOf(item[key]) < 0) {
      list.push(item[key])
      list2.push(item)
    }
  })
  console.log(list, list2)
}

function uniqeByKeys (array, key) {
  var result = []
  var obj = {}
  for (var i = 0; i < array.length; i++) {
    if (!obj[array[i][key]]) {
      result.push(array[i])
      obj[array[i][key]] = true
    }
  }
  console.log(result, obj)
  return result
}


uniqeByKeys(arr3, 'name')
