<template>
  <div class="board"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.board {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  min-height: 600px;
  max-width: 600px;
}
</style>
