<template>
  <div>
    <Searchbar/>
    <TempClimateInfo/>
    <TempLowest/>
    <temp-highest/>
  </div>
</template>

<script>
import TempClimateInfo from './components/TempClimateInfo'
import Searchbar from './components/Searchbar'
import TempLowest from './components/TempLowest.vue'
import TempHighest from './components/TempHighest'

export default {
  components: {
    TempClimateInfo,
    Searchbar,
    TempLowest,
    TempHighest
  }
}
</script>

<style>

</style>