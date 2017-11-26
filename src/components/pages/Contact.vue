<template>
  <div class="rounded shadow bg-white w-64 p-4">
    <div class="text-blue">Contact</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        msg: 'Message'
      }
    },
    head: {
      title: {
        inner: 'Drop me a line!'
      }
    }
  }
</script>

<style scoped>
</style>