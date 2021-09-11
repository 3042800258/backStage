<template name="myLogin">
  <div id="login">
      <div id="login">
    <div class="login_box">
      <div class="login_name_box">
        <span>登录名称：</span
        ><input type="text" placeholder=" 请输入登录名称" />
      </div>
      <div class="login_password_box">
        <span>登录密码：</span
        ><input type="text" placeholder=" 请输入登录密码" />
      </div>
      <div class="re_log_btn">
        <button class="reset_btn">重置</button>
        <button class="login_btn">登录</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'myLogin'
}
</script>

<style lang="less" scoped>
#login {
    height: 100%;
    background-color: #333;
}
.login_box {
  width: 440px;
  height: 300px;
  margin-left: 50%;
  margin-top: 300px;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 200),
    rgb(22, 153, 240)
  );
  input {
    width: 160px;
    outline: none;
    border: 1px solid #ccc;
  }
  .re_log_btn {
    float: right;
    margin: 30px 60px 0 0;
    color: #fff;
    .reset_btn {
      margin-right: 20px;
      background: rgb(196, 48, 48);
    }
    .login_btn {
      margin-right: 50px;
      background: rgb(19, 171, 218);
    }
  }
}
.login_box {
  padding-top: 50px;
}
.login_name_box,
.login_password_box {
  width: 240px;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
