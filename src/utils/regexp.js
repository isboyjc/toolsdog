/*
 * @LastEditors: isboyjc
 * @Description: 正则表达式
 * @Date: 2022-10-07 17:57:02
 * @LastEditTime: 2022-11-28 00:03:04
 * @Author: isboyjc
 */
export const isNumber = /^[0-9]*$/g
isNumber.name = '匹配数字'

export const isNonnegativeInteger = /^\d+$/g
isNonnegativeInteger.name = '匹配非负整数（正整数 + 0）'

export const isPositiveInteger = /^[0-9]*[1-9][0-9]*$/g
isPositiveInteger.name = '匹配正整数'

export const isNegativeInteger = /^-[0-9]*[1-9][0-9]*$/g
isNegativeInteger.name = '匹配负整数'

export const isInteger = /^-?\d+$/g
isInteger.name = '匹配整数'

export const isNonpositiveInteger = /^((-\d+)|(0+))$/g
isNonpositiveInteger.name = '匹配非正整数（负整数 + 0）'

export const isNonnegativeFloat = /^\d+(\.\d+)?$/g
isNonnegativeFloat.name = '匹配非负浮点数（正浮点数 + 0）'

export const isPositiveFloat =
  /^((0\.\d*[1-9]\d*)|([1-9]\d*\.\d*)|([1-9]\d*))$/g
isPositiveFloat.name = '匹配正浮点数'

export const isNegativeFloat =
  /^-((0\.\d*[1-9]\d*)|([1-9]\d*\.\d*)|([1-9]\d*))$/g
isNegativeFloat.name = '匹配负浮点数'

export const isFloat = /^(-?\d+)(\.\d+)?$/g
isFloat.name = '匹配浮点数'

export const isNonpositiveFloat = /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/g
isNonpositiveFloat.name = '匹配非正浮点数（负浮点数 + 0）'

export const isEnglish = /^[A-Za-z]+$/g
isEnglish.name = '匹配由26个英文字母组成的字符串'

export const isLowercaseEnglish = /^[a-z]+$/g
isLowercaseEnglish.name = '匹配由26个英文字母的小写组成的字符串'

export const isUppercaseEnglish = /^[A-Z]+$/g
isUppercaseEnglish.name = '匹配由26个英文字母的大写组成的字符串'

export const isEnglishAndNumber = /^[A-Za-z0-9]+$/g
isEnglishAndNumber.name = '匹配由数字和26个英文字母组成的字符串'

export const isEnglishAndNumberAndUnderline = /^\w+$/g
isEnglishAndNumberAndUnderline.name =
  '匹配由数字、26个英文字母或者下划线组成的字符串'

export const isChinese = /^[\u4e00-\u9fa5]{0,}$/g
isChinese.name = '匹配中文'

export const isPhone = /^1[3456789]\d{9}$/g
isPhone.name = '匹配手机号'

export const isIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g
isIdCard.name = '匹配身份证（一代&二代）'

export const isFirstGenerationIDCard = /(^\d{15}$)/g
isFirstGenerationIDCard.name = '匹配一代身份证'

export const isSecondGenerationIDCard = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/g
isSecondGenerationIDCard.name = '匹配二代身份证'

export const isUrl = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/g
isUrl.name = '匹配URL'

export const isIP = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/g
isIP.name = '匹配IP'

export const isDate = /^(\d{4})-(\d{2})-(\d{2})$/g
isDate.name = '匹配日期'

export const isTime = /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/g
isTime.name = '匹配时间'

export const isDateTime =
  /^(\d{4})-(\d{2})-(\d{2})\s([01]\d|2[0-3])(:[0-5]\d){1,2}$/g
isDateTime.name = '匹配日期时间'

export const isColor = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/g
isColor.name = '匹配颜色'

export const isQQ = /^[1-9][0-9]{4,9}$/g
isQQ.name = '匹配QQ'

export const isWeChat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/g
isWeChat.name = '匹配微信'

export const isPostalCode = /[1-9]\d{5}(?!\d)/g
isPostalCode.name = '匹配邮编'

export const isMacAddress = /^([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}$/g
isMacAddress.name = '匹配MAC地址'

export const isIPV4 = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/g
isIPV4.name = '匹配IPV4地址'

export const isIPV6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/g
isIPV6.name = '匹配IPV6地址'

export const isBase64 = /[^A-Za-z0-9\+\/\=]/g
isBase64.name = '匹配Base64'

export const isPasswordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/g
isPasswordStrong.name = '匹配强密码'

export const isPasswordMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/g
isPasswordMedium.name = '匹配中等密码'

export const isPasswordSimple = /^[a-zA-Z0-9_-]{6,16}$/g
isPasswordSimple.name = '匹配简单密码'

export const isCarNumber = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/g
isCarNumber.name = '匹配车牌号（简单）'

export const isLicensePlateNumber =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g
isLicensePlateNumber.name = '匹配车牌号（严格）'

export const isStockCode =
  /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g
isStockCode.name = '匹配股票代码'

export const isBankCard = /^([1-9]{1})(\d{14}|\d{18})$/g
isBankCard.name = '匹配银行卡'

export const is126Email = /((^([a-zA-Z]))(\w){5,17})@126.com$/g
is126Email.name = '匹配126邮箱'

export const is163Email = /((^([a-zA-Z]))(\w){5,17})@163.com$/g
is163Email.name = '匹配163邮箱'

export const isGmailEmail = /((^([a-zA-Z]))(\w){5,17})@gmail.com$/g
isGmailEmail.name = '匹配Gmail邮箱'

export const isQQEmail = /((^([a-zA-Z]))(\w){5,17})@qq.com$/g
isQQEmail.name = '匹配QQ邮箱'

export const isSinaEmail = /((^([a-zA-Z]))(\w){5,17})@sina.com$/g
isSinaEmail.name = '匹配新浪邮箱'

export const isSohuEmail = /((^([a-zA-Z]))(\w){5,17})@sohu.com$/g
isSohuEmail.name = '匹配搜狐邮箱'

export const isYahooEmail = /((^([a-zA-Z]))(\w){5,17})@yahoo.com$/g
isYahooEmail.name = '匹配雅虎邮箱'

export const isOutlookEmail = /((^([a-zA-Z]))(\w){5,17})@outlook.com$/g
isOutlookEmail.name = '匹配Outlook邮箱'

export const isHotmailEmail = /((^([a-zA-Z]))(\w){5,17})@hotmail.com$/g
isHotmailEmail.name = '匹配Hotmail邮箱'

export const isEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/g
isEmail.name = '匹配邮箱'
