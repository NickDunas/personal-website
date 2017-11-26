<template>
  <div class="bg-white w-full border-b border-grey-lighter">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="flex justify-start">
          <router-link class="px-2 py-4" to="/" exact>
            @NickDunas
          </router-link>
        </div>
        <div class="flex justify-end">
          <router-link class="px-2 mx-2 py-4" to="/portfolio" exact>
            Portfolio
          </router-link>
          <router-link class="px-2 mx-2 py-4" to="/contact" exact>
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
</style>