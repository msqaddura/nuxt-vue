<template>
  <div class="jumper">
    <p>Circulating Supply</p>
    <p>{{ token.circulatingSupply }}</p>
    <br />
    <p>Max Supply</p>
    <p>{{ token.maxSupply }}</p>
    <br />
    <p>Market Cap</p>
    <p>{{ token.marketCap }}</p>
    <br />
    <p>All-Time High</p>
    <p>{{ token.allTimeHigh }}</p>
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
