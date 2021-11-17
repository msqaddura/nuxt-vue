<template>
  <div class="jumper">
    <p class="title">Circulating Supply</p>
    <p class="content">{{ token.circulatingSupply }}</p>
    <br />

    <p class="title">Max Supply</p>
    <p class="content">{{ token.maxSupply }}</p>
    <br />

    <p class="title">Market Cap</p>
    <p class="content">{{ token.marketCap }}</p>
    <br />

    <p class="title">All-Time High</p>
    <p class="content">{{ token.allTimeHigh }}</p>
  </div>
</template>

<script>
export default {
  props: ['token'],
}
</script>

<style scoped lang="scss">
$size: 44px;
.symbol-image {
  width: $size;
  height: $size;
}
</style>
