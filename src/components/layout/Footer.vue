<template>
  <div>
    <div class="bg-white w-full border-t border-grey-lighter">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="py-4 text-grey-dark">
            © {{ year }} <span class="text-grey-dark font-semibold">Nick Dunas</span> - All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      year () {
        const date = new Date();
        return date.getFullYear();
      }
    }
  }
</script>

<style scoped>
</style>