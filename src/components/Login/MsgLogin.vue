<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-08-16 14:09:34
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-12 10:39:13
 * @FilePath: /share-drawing-v2.0/src/views/login/components/MsgLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-full flex justify-center items-center">
    <!-- 登录框 -->
    <div class="login-box w-80 shadow-lg rounded-lg p-8 pb-4 bg-white relative">
      <Logo class="mb-4" />
      <SwitchType class="mb-8" />
      <!-- 表单 -->
      <a-form ref="formRef" :model="form" :rules="rules">
        <a-form-item name="phone">
          <a-input v-model:value="form.phone" placeholder="请输入手机号">
            <template #prefix>
              <PhoneOutlined class="text-gray-400" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="code">
          <div class="w-full flex items-center space-x-2">
            <a-input-password v-model:value="form.code" placeholder="请输入验证码">
              <template #prefix>
                <LockOutlined class="text-gray-400" />
              </template>
            </a-input-password>
            <a-button
              class="w-28 bg-blue-500"
              type="primary"
              :disabled="time > 0"
              @click="getAuthCode"
              >{{ time > 0 ? `${time}s` : '获取验证码' }}</a-button
            >
          </div>
        </a-form-item>
        <a-form-item name="agreement">
          <a-checkbox v-model:checked="form.agreement">
            <span class="text-xs"
              >我已经阅读并接受<span class="text-blue-500 cursor-pointer" @click="showAgreement"
                >《用户服务条款》</span
              ></span
            ></a-checkbox
          >
        </a-form-item>
        <a-form-item>
          <a-button class="w-full bg-blue-500" type="primary" @click="loginOrRegister"
            >登 录</a-button
          >
        </a-form-item>
      </a-form>
      <!-- 扫码登录图标 -->
      <!-- <QRCode class="absolute right-0 top-0" /> -->
    </div>
  </div>
  <!-- 条款弹窗 -->
  <DialogAgreement v-model:visible="showDialogAgreement" @close="acceptAgreement" />
</template>

<script setup lang="ts">
// import QRCode from './QRCode.vue'
import DialogAgreement from './DialogAgreement.vue'
import { reactive, ref } from 'vue'
// import { PhoneOutlined, LockOutlined } from '@ant-design/icons-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { checkPhone, checkAgreement } from '@/utils/rules'
// import { LoginIn, authCode } from '@/api/index'
// import { setStorage } from '@/utils/storage'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'

import Logo from './Logo.vue'
import SwitchType from './SwitchType.vue'

const form = reactive({
  phone: '',
  code: '',
  agreement: false
})

const rules: Record<string, Rule[]> = {
  phone: [{ required: true, validator: checkPhone, trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
  agreement: [{ required: true, validator: checkAgreement, trigger: 'change' }]
}

// 表单验证通过后直接进行登录
const formRef = ref()
const router = useRouter()
const loginOrRegister = () => {
  formRef.value
    .validate()
    .then(() => {
      // 处理登录请求
      loginIn()
    })
    .catch(() => {})
}
const loginIn = async () => {
  // const data = {
  //   authCode: form.code.trim(),
  //   username: form.phone.trim(),
  //   authType: 'auth_code'
  // }
  try {
    // const response = await LoginIn(data)
    // setStorage('token', response.access_token)
    // setStorage('refresh_token', response.refresh_token)
    // setStorage('expires_in', response.expires_in)
    router.push({ path: '/layout' })
  } catch (error: any) {
    message.error(error.message)
  }
}

/**
 * 获取验证码
 */
interface getAuthCodeParams {
  mobile: string
  type: string
}
const time = ref(0)
const getAuthCode = () => {
  // 首先判断有没有填写手机号
  formRef.value
    .validate(['phone'])
    .then(async () => {
      // 获取验证码请求
      // const params: getAuthCodeParams = {
      //   mobile: form.phone.trim(),
      //   type: "loginCode",
      // };
      try {
        // await authCode(params);
        // 处理登录请求
        startCountDown(60)
      } catch (error: any) {
        message.error(error.message)
      }
    })
    .catch(() => {})
  function startCountDown(seconds: number): void {
    let remainningSeconds: number = seconds
    const countDownInterval = setInterval(() => {
      if (remainningSeconds > 0) {
        remainningSeconds--
        time.value = remainningSeconds
      } else {
        clearInterval(countDownInterval)
      }
    }, 1000)
  }
}

/**
 * 阅读条款
 */
const showDialogAgreement = ref(false)
const showAgreement = () => {
  showDialogAgreement.value = true
}
const acceptAgreement = () => {
  showDialogAgreement.value = false
  form.agreement = true
}
</script>

<style scoped lang="scss"></style>
