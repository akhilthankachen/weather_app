<template>
  <div>
    <h1 id="temp" class="text-5xl block">{{temp}}<span class="text-xl absolute">°C</span></h1>
    <h2 id="weather" class="mt-5 text-2xl">{{weather}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({temp: 'getCurrentTemp', weather: 'getCurrentWeather'})
  }
}
</script>

<style>

</style>