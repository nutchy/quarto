<template>
  <div class="board">
    <template v-for="(piece, i) in pieces">
      <Cell :class="`piece-${i}`" :key="i" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { initialPieces } from '@/utils'
import { Piece } from '@/types'
import Cell from './Cell.vue'

@Component({ components: { Cell } })
export default class Board extends Vue {
  pieces: Piece[] = []

  mounted() {
    console.log('INIR')
    this.pieces = initialPieces()
    console.log(this.pieces)
  }
}
</script>

<style lang="scss" scoped>
.board {
  margin: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  min-height: 600px;
  max-width: 600px;
}
</style>
