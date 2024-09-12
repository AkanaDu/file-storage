/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-12 10:36:48
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-12 10:37:06
 * @FilePath: \file-storage\src\utils\rules.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Rule } from 'ant-design-vue/es/form'

export const checkPhone = (_rule: Rule, value: string) => {
  const reg = /^1[3-9]\d{9}$/
  if (!reg.test(value.trim())) {
    return Promise.reject('请输入正确的手机号码!')
  } else {
    return Promise.resolve()
  }
}

export const checkAgreement = (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请阅读用户服务条款!')
  } else {
    return Promise.resolve()
  }
}
