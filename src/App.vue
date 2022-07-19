<template>
  <div class="app">
    <div v-if="state.account.mid">안녕하세요? {{state.account.memberName}}님!</div>
    <div v-else>
      <label for="userId">
        <span>아이디</span>
        <input type="text" id="userId" v-model="state.form.userId" />
      </label>
      <label for="userPassword">
        <span>패스워드</span>
        <input type="password" id="userPassword" v-model="state.form.userPassword" />
      </label>
      <hr />
      <button @click="submit()" type="button">로그인</button>
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
        userId:"",
        userPassword:""
      },
    });

    const submit = () => {
      const args = {
        userId: state.form.userId,
        userPassword: state.form.userPassword
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