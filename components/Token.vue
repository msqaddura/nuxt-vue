<template>
  <section class="container-fluid">
    <br />
    <Spinner v-if="$fetchState.pending"></Spinner>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <TokenGraph :token="token"></TokenGraph>
      <br />
      <h5 class="text-secondary mb-0">Alerts</h5>
      <br />
      <TokenAlerts :token="token"></TokenAlerts>
      <br />
      <h5 class="text-secondary mb-0">Info</h5>
      <br />
      <TokenInfo :token="token"></TokenInfo>
      <br />
      <h5 class="text-secondary mb-0">About</h5>
      <br />
      <p class="jumper">
        {{ token.description }}
      </p>
    </div>
  </section>
</template>

<script>
import { getCurrencyByName } from '~/core/domains/currency/currency.client'
export default {
  data() {
    return {
      token: {},
    }
  },
  async fetch() {
    this.token = await getCurrencyByName(this.$route.params.token)
  },
}
</script>

<style scoped lang="scss">
$size: 44px;
.symbol-image {
  width: $size;
  height: $size;
}
</style>
