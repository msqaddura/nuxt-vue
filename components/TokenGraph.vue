<template>
  <section class="container-fluid">
    <div class="jumper">
      <div class="media text-white">
        <img
          :src="require(`/assets/img/${token.symbol}.png`)"
          class="align-self-center mr-3 symbol-image"
        />
        <div class="media-body">
          <h5 class="mt-0">{{ token.price }}</h5>
          <p>
            <span>{{ token.price }}</span>
            <span class="text-uppercase">{{ token.symbol }}</span>
          </p>
        </div>
      </div>

      <trend
        :data="graph"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
      >
      </trend>
      <b-button @click="changeRange('1D')">1D</b-button>
      <b-button @click="changeRange('7D')">7D</b-button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['token'],
  data() {
    return {
      range: 'ALL',
    }
  },
  computed: {
    graph() {
      return this.token.priceHistory[this.range].priceData.map(
        (item) => item[1]
      )
    },
    rangeToDay() {
      return ''
    },
  },
  methods: {
    changeRange(range) {
      console.log(range)
      this.range = range
    },
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
