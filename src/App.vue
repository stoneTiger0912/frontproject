<template>
  <div class="app">
    <div v-if="state.account.mid">안녕하세요? {{state.account.memberName}}님!</div>
    <div v-else>
      <label for="longinId">
        <span>아이디</span>
        <input type="text" id="loginId" v-model="state.form.loginId" />
      </label>
      <label for="longinPw">
        <span>패스워드</span>
        <input type="password" id="loginPw" v-model="state.form.loginPw" />
      </label>
      <hr />
      <button @click="submit()">로그인</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      account:{
        mid:null,
        memberName: ""
      },
      form:{
        loginId:"",
        loginPw:""
      },
    });

    const submit = () => {
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw
      };

      axios.post("/api/account", args).then((res) => {
        state.account = res.data;
      });
      
      return { state, submit };
    }

    axios.get("/api/account").then((res) => {
      state.account = res.data;
    })

    return {state, submit }
  },
}
</script>