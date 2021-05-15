<template>
  <div class="w-auto">
      <div class="flex items-center">
        <font-awesome-icon icon="chevron-up" id="highIndicator" class=""/>
        <h1 id="tempHigh" class="block ml-2 text-2xl">{{highTemp.temp}}<span class="absolute text-sm mt-0.5">°C</span></h1>
      </div>
      <div class="" id="tempHighTime">at {{highTemp.time}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({highTemp: 'getHighestTemp'})
    }
}
</script>

<style>

</style>
