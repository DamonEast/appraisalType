/**
* @author DamonEast
* ###### Mon Jun 22 14:44:26 CST 2020
**/

/**
 * Js类型检测
 * @param {*} 需要被检测的数据
 * @param {*} type 传入的类型
 */

 function AppraisalType(targetData, type) {
  if (arguments.length === 0) {
    throw new Error('arguments can\'t be empty')
  }
  let IncompleteTypeStr = Object.prototype.toString.call(targetData).split(" ")[1];
  let completeTypeStr = IncompleteTypeStr.slice(0, IncompleteTypeStr.length - 1).toLowerCase();
  if (arguments.length === 1) {
    return completeTypeStr
  }
  if (arguments.length >= 2) {
    let lowercaseType = type.toLowerCase();
    let Flag = completeTypeStr === lowercaseType
    return Flag
  }
}

export default AppraisalType