<template>
  <div class="bg-white w-full border-b border-grey-lighter shadow">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-wrap justify-start">
          <div class="flex flex-row sm:items-center mr-4 items-center">
            <img class="block h-12 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-3 sm:ml-0" src="~@/assets/img/me.jpg" alt="">
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="">
                <p class="text-2xl leading-tight text-blue">Nick Dunas</p>
                <p class="leading-tight font-thin text-grey-dark">Full-stack Developer</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap">
            <router-link class="px-4 py-6" to="/" exact>
              Intro
            </router-link>

            <router-link class="px-4 py-6" to="/work" exact>
              Work
            </router-link>

            <router-link class="px-4 py-6" to="/bio" exact>
              Bio
            </router-link>

            <router-link class="px-4 py-6" to="/contact" exact>
              Contact
            </router-link>
          </div>
        </div>

        <div class="flex justify-end">
          <a href="https://twitter.com/NickDunas" target="_blank" class="px-2 mx-2 py-6">
            <icon name="twitter" class="text-blue-light"></icon>
          </a>

          <a href="https://github.com/NickDunas" target="_blank" class="px-2 mx-2 py-6">
            <icon name="github" class="text-grey-darkest"></icon>
          </a>

          <a href="https://www.linkedin.com/in/ndunas/" target="_blank" class="px-2 mx-2 py-6">
            <icon name="linkedin" class="text-blue-dark"></icon>
          </a>

          <a href="mailto:nntounas@gmail.com" target="_blank" class="px-6 mx-2 py-6 bg-blue">
            <icon name="envelope" class="text-grey-lightest"></icon>
          </a>
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