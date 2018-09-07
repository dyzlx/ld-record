<template lang="html">
  <div id="nav">
    <div id="flag">
      <img src="" alt="">
    </div>
    <ul v-for="list in lists">
      <li v-for="category in list">
        <a :href="category.href">
          <span>{{category.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      lists:[
        [{href:"/src/all",name:"全部文件"},
         {href:"/src/image",name:"图片"},
         {href:"/src/audio",name:"音频"},
         {href:"/src/vedio",name:"视频"},
         {href:"/src/document",name:"文档"}],
        [
         {href:"/src/recycled",name:"回收站"}]
       ]
    }
  },
  mounted(){
    console.log("nav.vue被加载啦！！！")
  }
}
</script>

<style lang="scss">
  div#nav{
    width:200px;
    min-height: 500px;
    height:100%;
    background-color: #eee;
    padding:10px;
    box-sizing: border-box;
    float:left;
    >ul{
      list-style:none;
      font-size:18px;
      color:#7EC0EE;
      >li:first-child{
        padding:10px 0;
      }
      >li{
        padding:10px
      }
      a{
         text-decoration: none;
         color:#7EC0EE;
      }
    }
  }
</style>
