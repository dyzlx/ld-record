<template lang="html">
  <div id="handle">
    <div class="buttonGroup">
      <button type="button" name="button">上传</button>
      <button type="button" name="button">下载</button>
      <button type="button" name="button">新建文件夹</button>
    </div>
    <div class="handleRight">
      <input type="text" name="" value="" placeholder="搜索文件">
      <span>{{username}}&nbsp;,&nbsp;</span>
      <a href="/user/logout">退出</a>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      username:"lixin",
    }
  }
}
</script>

<style lang="scss">
  div#handle{
    height: 70px;
    line-height: 70px;
    margin-left: 200px;
    box-sizing: border-box;
    background-color: #eee;
    // min-width: 600px;
    // overflow: hidden;
    // position:relative;
    >div.buttonGroup{
      display: inline-block;
      button{
        outline:none;
        font-size: 16px;
        color:#7EC0EE;
        background-color: #fff;
        border: 1px solid #7EC0EE;
        border-radius: 3px;
        margin: 0 7px;
        padding:2px 7px;
        height: 34px;
        line-height: 28px;
        vertical-align: middle;
      }
    }
    >div.handleRight{
      display: inline-block;
      vertical-align: middle;
      float:right;
      width: 100%;
      >input{
        outline: none;
        box-sizing: inherit;
        display: inline-block;
        height:30px;
        min-width: 60px;
        width: 20%;
        border: 1px solid #7EC0EE;
        border-radius: 5px;
        margin-right: 30px;
      }
      >a{
        text-decoration: none;
      }
    }
  }
</style>
