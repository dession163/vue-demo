<template>
  <div>
  <ul>
    <li>
      <router-link to="/home/first">路由1</router-link>
      <router-link to="/home/second">路由2</router-link>
    </li>
  </ul>
    <router-view class="view-one" name="firstrouterview"></router-view>
    <router-view class="view-two" name="secondrouterview"></router-view>
  </div>

</template>

<script>

</script>

<style>

</style>
