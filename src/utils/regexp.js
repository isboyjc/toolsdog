/*
 * @LastEditors: isboyjc
 * @Description: 正则表达式 基于 https://github.com/heiyehk/hyjs/blob/main/packages/utils/dist/index.js 改造
 * @Date: 2022-10-07 17:57:02
 * @LastEditTime: 2023-03-14 15:11:37
 * @Author: isboyjc
 */

/**
 * 火车车次
 * @example
 * G1868,D102,D9,Z5,Z24,Z17
 */
export const RegExpTrain = /^[GCDZTSPKXLY1-9]\d{1,4}$/
RegExpTrain.name = '火车车次'

/**
 * 手机机身码(IMEI)
 * @example
 * 123456789012345,1234567890123456,12345678901234567
 */
export const RegExpIMEI = /^\d{15,17}$/
RegExpIMEI.name = '手机机身码(IMEI)'

/**
 * 必须带端口号的网址(或ip)
 * @example
 * https://www.qq.com:8080,127.0.0.1:5050,baidu.com:8001,http://192.168.1.1:9090
 */
export const RegExpIP = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/
RegExpIP.name = '必须带端口号的网址(或ip)'

/**
 * 网址(URL)
 * @example
 * www.qq.com,https://vuejs.org/v2/api/#v-model,www.qq.99,//www.qq.com,www.腾讯.cs,ftp://baidu.qq,http://baidu.com,https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15,360.com:8080/vue/#/a=1&b=2
 */
export const RegExpURL =
  /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
RegExpURL.name = '网址(URL)'

/**
 * 统一社会信用代码
 * @example
 * 91230184MA1BUFLT44,92371000MA3MXH0E3W
 */
export const RegExpSocialCreditCodeStrict =
  /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
RegExpSocialCreditCodeStrict.name = '统一社会信用代码'

/**
 * 统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
 * @example
 * 91110108772551611J,911101085923662400
 */
export const RegExpSocialCreditCode =
  /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/
RegExpSocialCreditCode.name =
  '统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)'

/**
 * 迅雷链接
 * @example
 * thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo=
 */
export const RegExpThunder = /^thunderx?:\/\/[a-zA-Z\d]+=$/
RegExpThunder.name = '迅雷链接'

/**
 * ed2k链接(宽松匹配)
 * @example
 * ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/
 */
export const RegExpEd2k = /^ed2k:\/\/\|file\|.+\|\/$/
RegExpEd2k.name = 'ed2k链接(宽松匹配)'

/**
 * 磁力链接(宽松匹配)
 * @example
 * magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC
 */
export const RegExpMagnet = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/
RegExpMagnet.name = '磁力链接(宽松匹配)'

/**
 * 子网掩码(不包含 0.0.0.0)
 * @example
 * 255.255.255.0,255.255.255.255,255.240.0.0
 */
export const RegExpSubNet =
  /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/
RegExpSubNet.name = '子网掩码(不包含 0.0.0.0)'

/**
 * linux"隐藏文件"路径
 * @example
 * /usr/ad/.dd,/root/.gitignore,/.gitignore
 */
export const RegExpLinuxHiddenDirPath = /^\/(?:[^/]+\/)*\.[^/]*/
RegExpLinuxHiddenDirPath.name = 'linux"隐藏文件"路径'

/**
 * linux文件夹路径
 * @example
 * /usr/ad/dd/,/,/root/,/ a a / a / a a /
 */
export const RegExpLinuxDirPath = /^\/(?:[^/]+\/)*$/
RegExpLinuxDirPath.name = 'linux文件夹路径'

/**
 * linux文件路径
 * @example
 * /root/b.ts,/root/abc
 */
export const RegExpLinuxFilePath = /^\/(?:[^/]+\/)*[^/]+$/
RegExpLinuxFilePath.name = 'linux文件路径'

/**
 * window"文件夹"路径
 * @example
 * C:\Users\Administrator\Desktop,e:\m\
 */
export const RegExpWindowsDirPath = /^[a-zA-Z]:\\(?:\w+\\?)*$/
RegExpWindowsDirPath.name = 'window"文件夹"路径'

/**
 * window下"文件"路径
 * @example
 * C:\Users\Administrator\Desktop\qq.link,e:\m\vscode.exe
 */
export const RegExpWindowsFilePath = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/
RegExpWindowsFilePath.name = 'window下"文件"路径'

/**
 * 股票代码(A股)
 * @example
 * sz000858,SZ002136,sz300675,SH600600,sh601155
 */
export const RegExpStockA =
  /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/
RegExpStockA.name = '股票代码(A股)'

/**
 * 大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数
 * @example
 * 150,100.5
 */
export const RegExpGrade = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/
RegExpGrade.name =
  '大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数'

/**
 * html注释
 * @example
 * <!--<div class="_bubble"></div>--><div>chenguzhen87</div><div class="_bubble"></div>-->
 */
export const RegExpHTMLAnnotation = /<!--[\s\S]*?-->/g
RegExpHTMLAnnotation.name = 'html注释'

/**
 * md5格式(32位)
 * @example
 * 21fe181c5bfc16306a6828c1f7b762e8
 */
export const RegExpMD5 = /^([a-f\d]{32}|[A-F\d]{32})$/
RegExpMD5.name = 'md5格式(32位)'

/**
 * GUID/UUID
 * @example
 * e155518c-ca1b-443c-9be9-fe90fdab7345,41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D,00000000-0000-0000-0000-000000000000
 */
export const RegExpUuid = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i
RegExpUuid.name = 'GUID/UUID'

/**
 * 版本号(version)格式必须为X.Y.Z
 * @example
 * 16.3.10
 */
export const RegExpVersion = /^\d+(?:\.\d+){2}$/
RegExpVersion.name = '版本号(version)格式必须为X.Y.Z'

/**
 * 视频(video)链接地址（视频格式可按需增删）
 * @example
 * http://www.abc.com/video/wc.avi
 */
export const RegExpVideoUrlPath =
  /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i
RegExpVideoUrlPath.name = '视频(video)链接地址（视频格式可按需增删）'

/**
 * 图片(image)链接地址（图片格式可按需增删）
 * @example
 * https://www.abc.com/logo.png,http://www.abc.com/logo.png
 */
export const RegExpImageUrlPath =
  /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i
RegExpImageUrlPath.name = '图片(image)链接地址（图片格式可按需增删）'

/**
 * 24小时制时间（HH:mm:ss）
 * @example
 * 23:34:55
 */
export const RegExp24Time = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
RegExp24Time.name = '24小时制时间（HH:mm:ss）'

/**
 * 12小时制时间（hh:mm:ss）
 * @example
 * 11:34:55
 */
export const RegExp12Time = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/
RegExp12Time.name = '12小时制时间（hh:mm:ss）'

/**
 * base64格式
 * @example
 * data:image/gif;base64,xxxx==
 */
export const RegExpBase64 =
  /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i
RegExpBase64.name = 'base64格式'

/**
 * 数字/货币金额（支持负数、千分位分隔符）
 * @example
 * 100,-0.99,3,234.32,-1,900,235.09,12,345,678.90
 */
export const RegExpAmount = /^-?\d+(,\d{3})*(\.\d{1,2})?$/
RegExpAmount.name = '数字/货币金额（支持负数、千分位分隔符）'

/**
 * 数字/货币金额 (只支持正数、不支持校验千分位分隔符)
 * @example
 * 0.99,8.99,666
 */
export const RegExpNumberAmount =
  /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/
RegExpNumberAmount.name = '数字/货币金额 (只支持正数、不支持校验千分位分隔符)'

/**
 * 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 * @example
 * 6234567890,6222026006705354000
 */
export const RegExpCardNumber = /^[1-9]\d{9,29}$/
RegExpCardNumber.name =
  '银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）'

/**
 * 中文姓名
 * @example
 * 葛二蛋,凯文·杜兰特,德克·维尔纳·诺维茨基
 */
export const RegExpCNName = /^(?:[\u4e00-\u9fa5·]{2,16})$/
RegExpCNName.name = '中文姓名'

/**
 * 英文姓名
 * @example
 * James,Kevin Wayne Durant,Dirk Nowitzki
 */
export const RegExpENName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
RegExpENName.name = '英文姓名'

/**
 * 车牌号(新能源)
 * @example
 * 京AD92035,甘G23459F,京AA92035
 */
export const RegExpNewEnergyNumberPlate =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/
RegExpNewEnergyNumberPlate.name = '车牌号(新能源)'

/**
 * 车牌号(非新能源)
 * @example
 * 京A00599,黑D23908
 */
export const RegExpNumberPlate =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/
RegExpNumberPlate.name = '车牌号(非新能源)'

/**
 * 车牌号(新能源+非新能源)
 * @example
 * 京A12345D,京A00599,京AD92035,甘G23459F,京AA92035
 */
export const RegExpAllNumberPlate =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/
RegExpAllNumberPlate.name = '车牌号(新能源+非新能源)'

/**
 * 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
 * @example
 * 008618311006933,+8617888829981,19119255642
 */
export const RegExpMobilePhoneNumberStrict =
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
RegExpMobilePhoneNumberStrict.name =
  '手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段'

/**
 * 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @example
 * 008618311006933,+8617888829981,19119255642
 */
export const RegExpMobilePhoneNunber = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
RegExpMobilePhoneNunber.name =
  '手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可'

/**
 * 手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
 * @example
 * 008618311006933,+8617888829981,19119255642
 */
export const RegExpMobilePhoneLoose = /^(?:(?:\+|00)86)?1\d{10}$/
RegExpMobilePhoneLoose.name =
  '手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条'

/**
 * date(日期)
 * @example
 * 1990-12-12,1-1-1,0000-1-1
 */
export const RegExpRungDate =
  /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/
RegExpRungDate.name = 'date(日期)'

/**
 * 可以被moment转化成功的时间 YYYYMMDD HH:mm:ss
 * @example
 * 2020/01/01 23:59:59,2020-01-01 00:00:00,20200101 11:11:11
 */
export const RegExpDate =
  /^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
RegExpDate.name = '可以被moment转化成功的时间 YYYYMMDD HH:mm:ss'

/**
 * email(邮箱)
 * @example
 * 90203918@qq.com,nbilly@126.com,汉字@qq.com
 */
export const RegExpEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
RegExpEmail.name = 'email(邮箱)'

/**
 * 座机(tel phone)电话(国内),如: 0341-86091234
 * @example
 * 0936-4211235,89076543,010-12345678-1234
 */
export const RegExpTelPhone =
  /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/
RegExpTelPhone.name = '座机(tel phone)电话(国内),如: 0341-86091234'

/**
 * 身份证号(1代,15位数字)
 * @example
 * 123456991010193
 */
export const RegExp1IdNumber =
  /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/
RegExp1IdNumber.name = '身份证号(1代,15位数字)'

/**
 * 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 * @example
 * 12345619991205131x
 */
export const RegExp2IdNumber =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
RegExp2IdNumber.name =
  '身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X'

/**
 * 身份证号, 支持1/2代(15位/18位数字)
 * @example
 * 622223199912051311,12345619991205131x,123456991010193
 */
export const RegExpIdNumber =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/
RegExpIdNumber.name = '身份证号, 支持1/2代(15位/18位数字)'

/**
 * 护照（包含香港、澳门）
 * @example
 * s28233515,141234567,159203084,MA1234567,K25345719
 */
export const RegExpPassport =
  /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/
RegExpPassport.name = '护照（包含香港、澳门）'

/**
 * 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
 * @example
 * justin,justin1989,justin_666
 */
export const RegExpAccount = /^[a-zA-Z]\w{4,15}$/
RegExpAccount.name =
  '帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合'

/**
 * 中文/汉字
 * @example
 * 正则,前端
 */
export const RegExpCN =
  /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
RegExpCN.name = '中文/汉字'

/**
 * 小数
 * @example
 * 0.0,0.09
 */
export const RegExpDecimals = /^\d+\.\d+$/
RegExpDecimals.name = '小数'

/**
 * 数字
 * @example
 * 12345678
 */
export const RegExpNumber = /^\d{1,}$/
RegExpNumber.name = '数字'

/**
 * html标签(宽松匹配)
 * @example
 * <div id="app"> 2333 </div>,<input type="text">,<br>
 */
export const RegExpHTMLDOM = /<(\w+)[^>]*>(.*?<\/\1>)?/
RegExpHTMLDOM.name = 'html标签(宽松匹配)'

/**
 * qq号格式正确
 * @example
 * 903013545,9020304
 */
export const RegExpQQNumber = /^[1-9][0-9]{4,10}$/
RegExpQQNumber.name = 'qq号格式正确'

/**
 * 数字和字母组成
 * @example
 * james666,haha233hi
 */
export const RegExpAlphanumeric = /^[A-Za-z0-9]+$/
RegExpAlphanumeric.name = '数字和字母组成'

/**
 * 英文字母
 * @example
 * Russel
 */
export const RegExpEnglishAlphabet = /^[a-zA-Z]+$/
RegExpEnglishAlphabet.name = '英文字母'

/**
 * 小写英文字母组成
 * @example
 * russel
 */
export const RegExpLowercase = /^[a-z]+$/
RegExpLowercase.name = '小写英文字母组成'

/**
 * 大写英文字母
 * @example
 * ABC,KD
 */
export const RegExpCapital = /^[A-Z]+$/
RegExpCapital.name = '大写英文字母'

/**
 * 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @example
 * Kd@curry666
 */
export const RegExpPasswordStrength =
  /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
RegExpPasswordStrength.name =
  '密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'

/**
 * 用户名校验，4到16位（字母，数字，下划线，减号）
 * @example
 * xiaohua_qq
 */
export const RegExpUserName = /^[a-zA-Z0-9_-]{4,16}$/
RegExpUserName.name = '用户名校验，4到16位（字母，数字，下划线，减号）'

/**
 * ip-v4[:端口]
 * @example
 * 172.16.0.0,172.16.0.0:8080,127.0.0.0,127.0.0.0:998
 */
export const RegExpIPV4 =
  /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/
RegExpIPV4.name = 'ip-v4[:端口]'

/**
 * ip-v6[:端口]
 * @example
 * 2031:0000:130f:0000:0000:09c0:876a:130b,[2031:0000:130f:0000:0000:09c0:876a:130b]:8080
 */
export const RegExpIPV6 =
  /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i
RegExpIPV6.name = 'ip-v6[:端口]'

/**
 * 16进制颜色
 * @example
 * #f00,#F90,#000,#fe9de8
 */
export const RegExpColor16 = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
RegExpColor16.name = '16进制颜色'

/**
 * 微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
 * @example
 * github666,kd_-666
 */
export const RegExpWXNumber = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/
RegExpWXNumber.name =
  '微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线'

/**
 * 邮政编码(中国)
 * @example
 * 734500,100101
 */
export const RegExpPostalCode =
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
RegExpPostalCode.name = '邮政编码(中国)'

/**
 * 中文和数字
 * @example
 * 哈哈哈,你好6啊
 */
export const RegExpChineseAndNumbers =
  /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/
RegExpChineseAndNumbers.name = '中文和数字'

/**
 * 不能包含字母
 * @example
 * 你好6啊,@¥()！
 */
export const RegExpNotLetter = /^[^A-Za-z]*$/
RegExpNotLetter.name = '不能包含字母'

/**
 * java包名
 * @example
 * com.bbb.name
 */
export const RegExpJavaPackageName = /^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/
RegExpJavaPackageName.name = 'java包名'

/**
 * mac地址
 * @example
 * 38:f9:d3:4b:f5:51,00-0C-29-CA-E4-66
 */
export const RegExpMac =
  /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i
RegExpMac.name = 'mac地址'

/**
 * 匹配连续重复的字符
 * @example
 * 我我我,112233,11234
 */
export const RegExpContinuousCharacters = /(.)\1+/
RegExpContinuousCharacters.name = '匹配连续重复的字符'

/**
 * 数字和英文字母组成，并且同时含有数字和英文字母
 * @example
 * 我a我1我,a对1
 */
export const RegExpCharacter = /^(?=.*[a-zA-Z])(?=.*\d).+$/
RegExpCharacter.name = '数字和英文字母组成，并且同时含有数字和英文字母'

/**
 * 香港身份证
 * @example
 * K034169(1)
 */
export const RegExpHKIDCard = /^[a-zA-Z]\d{6}\([\dA]\)$/
RegExpHKIDCard.name = '香港身份证'

/**
 * 澳门身份证
 * @example
 * 5686611(1)
 */
export const RegExpAMIDCard = /^[1|5|7]\d{6}\(\d\)$/
RegExpAMIDCard.name = '澳门身份证'

/**
 * 台湾身份证
 * @example
 * U193683453
 */
export const RegExpTWIDCard = /^[a-zA-Z][0-9]{9}$/
RegExpTWIDCard.name = '台湾身份证'

/**
 * 大写字母，小写字母，数字，特殊符号 `@#$%^&*`~()-+=` 中任意3项密码
 * @example
 * a1@,A1@,Aa@
 */
export const RegExpStrongPassword =
  /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/
RegExpStrongPassword.name =
  '大写字母，小写字母，数字，特殊符号 `@#$%^&*`~()-+=` 中任意3项密码'

/**
 * 正整数，不包含0
 * @example
 * 1231
 */
export const RegExpPositiveInteger = /^\+?[1-9]\d*$/
RegExpPositiveInteger.name = '正整数，不包含0'

/**
 * 负整数，不包含0
 * @example
 * -1231
 */
export const RegExpNegativeInteger = /^-[1-9]\d*$/
RegExpNegativeInteger.name = '负整数，不包含0'

/**
 * 整数
 * @example
 * -1231,123
 */
export const RegExpInteger = /^-?[0-9]\d*$/
RegExpInteger.name = '整数'

/**
 * 浮点数
 * @example
 * 1.5
 */
export const RegExpFloatingNumber = /^(-?\d+)(\.\d+)?$/
RegExpFloatingNumber.name = '浮点数'

/**
 * email(支持中文邮箱)
 * @example
 * 90203918@qq.com,nbilly@126.com,啦啦啦@126.com
 */
export const RegExpEmailLoose =
  /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
RegExpEmailLoose.name = 'email(支持中文邮箱)'
