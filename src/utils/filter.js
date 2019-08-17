export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function splitArray(arr,num) {
  /**
   * @param arr 待平分的原数组
   * @param num 平分后子数组的个数，即原数组长度 num
   */
  // 每个子数组长度
  let  perArrLength = Math.ceil(arr.length/num);
  let result = [];
  for(let i = 0;i<arr.length;i+=perArrLength) {
    result.push(arr.slice(i,i+perArrLength));
  }
  console.log(arr, num, result.length)
  return result;
}
