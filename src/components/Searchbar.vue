<template>
  <div class="">
      <input id="search_input" :value="searchText" @input="onInputText" type="text" placeholder="Location?" class="bg-blue-300 h-8 px-2 outline-none placeholder-gray-200"/>
      <button id="search_button" @click="onSearch" class="bg-blue-200 w-auto btn px-3 h-8 focus:outline-none">
        <font-awesome-icon icon="search" class="text-white"/>
      </button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({searchText: 'getSearchText'})
  },
  methods: {
    ...mapMutations(['onInputText']),
    ...mapActions(['onSearch'])
  }
}
</script>

<style>
.btn {
  background-color: brown;
}
</style>