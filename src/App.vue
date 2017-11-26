<template>
  <div id="app" class="font-sans">
    <div class="bg-grey-lightest w-full min-h-screen">
      <app-header></app-header>
      <div class="container mx-auto py-6">
        <router-view/>
      </div>
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
