<template>
  <div class="webpage__app">
    <Topbar />
    <div class="webpage__main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar';

export default {
  name: 'App',
  components: {
    Topbar,
  },
}
</script>

<style lang="scss">
  @import "~@/assets/styles/global.scss";

  .webpage__main {
    margin-top: 30px;
  }
</style>
