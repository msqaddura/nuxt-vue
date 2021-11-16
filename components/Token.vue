<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <img :src="require(`/assets/img/${token.symbol}.png`)" />
    <trend
      :data="display"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
    >
    </trend>
  </div>
</template>

<script>
import { getCurrencyByName } from '~/core/domains/currency/currency.client'
export default {
  data() {
    return {
      token: {},
      display: [],
    }
  },
  async fetch() {
    this.token = await getCurrencyByName(this.$route.params.token)
    this.changeRange('7D')
  },

  methods: {
    changeRange(range) {
      this.display = this.token.priceHistory[range].priceData.map(
        (item) => item[1]
      )
    },
  },
}
</script>
