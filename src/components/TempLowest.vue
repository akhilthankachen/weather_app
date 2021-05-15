<template>
  <div class="w-auto">
      <div class="flex items-center">
        <font-awesome-icon icon="chevron-down" id="lowIndicator" class=""/>
        <h1 id="tempLow" class="block ml-2 text-2xl">{{lowTemp.temp}}<span class="absolute text-sm mt-0.5">°C</span></h1>
      </div>
      <div class="" id="tempLowTime">at {{lowTemp.time}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({lowTemp: 'getLowestTemp'})
    }
}
</script>

<style>

</style>