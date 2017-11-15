<template>
  <div class="step-by-step-change">
    <div class="container bodys" style="background-color: #FFFFFF;margin-top: 140px;position: relative;">
      <ul style="overflow:hidden;float:left;width: 423px;" class="list-unstyled hotsr  new-lists-style">
        <li v-for="item in items" class="show">
        <span class="new-icon d-icon-red"> </span>
        <span class="new-icon d-icon-gray"></span>
        <a v-bind:href=[item.url] target="_blank">{{item.title}}</a>
        <small class="right">{{item.time}}</small>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapMutations, mapActions, mapGetters, mapState}     from 'vuex'
  export default {
    computed: {
      ...mapState(['items'])
    },
    mounted() {
      // 鼠标over事件,标亮点
      $(".new-lists-style li").bind('mouseover', function () {
          var i = $(this).index();
          $(this).addClass('list-show');
          $(".new-lists-style li").removeClass('list-show');
          $(".new-lists-style li").eq(i).addClass('list-show');
      });
    }
  }

</script>
<style>
  .new-lists-style {
    background: url("/static/img/index-new-line.jpg") no-repeat scroll 5px 18px;
  }
  .hotsr .new-icon {
    padding: 1px 5px;
    font-size: 12px;
    margin-right: 8px;
  }
  .hotsr .d-icon-red {
    background: url("/static/img/index_new_icon_red.png") no-repeat scroll 0 3px;
    display: none;
  }
  .hotsr .d-icon-gray {
    background: url("/static/img/index_new_icon_gray.png") no-repeat scroll 0 3px;
  }
  .hotsr .list-show .d-icon-red {
    display: inline;
  }
  .hotsr .list-show .d-icon-gray {
    display: none;
  }
  .hotsr .list-show:hover a {
    color: #ff3a20;
  }
  .index_model_title img {
    width: 26px;
    margin-top: 5px;
  }
  .index_model_title h4 {
    margin-top: 7px;
  }
  .hotsr li{margin: 12px 0px 0px;padding:0px;font-size: 15px;}
</style>
