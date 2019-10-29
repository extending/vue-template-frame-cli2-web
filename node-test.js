let a = {
  i: 1,
  valueOf() {
    console.log(this)
    return this
  },
  toString() {
    console.log(this.i)
    return this.i++
  }
}
console.time(1)
if(a == 1 && a == 2 && a == 3) {
  console.log('hello world')
}
console.timeEnd(1)

// console.group('一级分组');
// console.log('一级分组的内容');

// console.group('二级分组');
// console.log('二级分组的内容');
// console.groupEnd(); // 二级分组结束

// console.log('一级分组的内容二');
// console.groupEnd(); // 一级分组结束
