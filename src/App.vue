<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="DetailPage">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
