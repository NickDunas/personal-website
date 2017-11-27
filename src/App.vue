<template>
  <div id="app" class="font-sans">
    <div class="flex flex-col bg-grey-lightest w-full min-h-screen">
      <app-header></app-header>
      <router-view/>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import './assets/sass/app.scss';
</style>
