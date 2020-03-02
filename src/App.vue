<template>
  <div id="app">
    <Board />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Board from './components/Board.vue'
import { Color, Piece } from './types/index'
import { initialPieces } from './utils'

@Component({
  components: {
    HelloWorld,
    Board
  }
})
export default class App extends Vue {
  mounted() {
    const pieces: Piece[] = initialPieces()
    console.log(pieces)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
