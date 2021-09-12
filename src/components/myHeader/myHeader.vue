<template name="myHeader">
    <div id="Header">
        <div class="header">
            <div class="logo">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="title">
                <h2>后台管理系统</h2>
            </div>
            <div class="exit_sys">
                 <button type="button" class="btn btn-light">退出登录</button>
            </div>
        </div>
    </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'myHeader'
}
</script>

<style lang="less" scoped>
    #Header {
        .header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
