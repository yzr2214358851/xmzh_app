<template>
  <div>
    <div>
      <input
        v-model="username"
        placeholder="请输入用户名"
      >
    </div>
    <div>
      <input
        v-model="password"
        placeholder="请输入密码"
        type="password"
      >
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:'admin',
      password:'2214358851'
    }
  },
  methods:{
    handleLogin(){
      alert(1)
    }
  }
};
</script>

<style>
</style>