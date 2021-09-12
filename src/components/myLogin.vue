<template name="myLogin">
  <div id="login">
    <div class="login_box">
      <div class="login_name_box">
        <span class="login_text">账户：</span>
        <input
          type="text"
          ref="inp1"
          placeholder=" 请输入账号"
          v-model.trim="user_name"
        />
      </div>
      <div class="login_password_box">
        <span class="login_text">密码：</span>
        <input
          type="password"
          ref="inp2"
          placeholder=" 请输入密码"
          v-model.trim="user_password"
        />
      </div>
      <div class="re_log_btn">
        <div><button class="reset_btn" @click="reset_fun">重置</button></div>
        <div><button class="login_btn" @click="login_fun">登录</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLogin',
  data() {
    return {
      user_name: 'admin',
      user_password: '666666'
    }
  },
  methods: {
    reset_fun() {
      this.user_name = ''
      this.user_password = ''
      const borderStyle = '2px solid #ccc'
      this.$refs.inp1.style.border = borderStyle
      this.$refs.inp2.style.border = borderStyle
    },
    login_fun() {
      if (this.user_name === 'admin' && this.user_password === '666666') {
        localStorage.setItem('token', 'Bearer xxx')
        this.$router.push('/home')
      } else {
        this.input_err()
        alert('账号或密码错误!')
        localStorage.removeItem('token')
      }
    },
    input_err() {
      const borderStyle = '2px solid red'
      this.$refs.inp1.style.border = borderStyle
      this.$refs.inp2.style.border = borderStyle
    }
  }
}
</script>

<style lang="less" scoped>
@font_color: #fff;
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("https://sqimg.qq.com/mapp/im_qq_com/pc_bg.jpg");
}
.login_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 4.4rem;
  width: 12rem;
  height: 6rem;
  border: 1px solid @font_color;
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 200),
    rgb(22, 153, 240)
  );
  .login_password_box {
    margin-top: 0.2rem;
  }
  .re_log_btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 188px;
    padding-left: 48px;
    margin-top: 0.2rem;
    color: @font_color;
    .reset_btn {
      width: 44px;
      background: rgb(196, 48, 48);
    }
    .login_btn {
      width: 44px;
      background: rgb(19, 171, 218);
    }
  }
  .login_text {
    color: @font_color;
    font-size: 16px;
  }
  input {
    width: 140px;
    outline: none;
    border: 1px solid #ccc;
  }
}
</style>
