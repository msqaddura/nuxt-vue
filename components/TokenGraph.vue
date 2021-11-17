<template>
  <section>
    <NuxtLink to="/" class="d-flex align-items-center">
      <img :src="require('/assets/icon/back.png')" />
      <h1>{{ token.name }}</h1>
    </NuxtLink>

    <br />
    <div class="jumper">
      <div class="media text-white">
        <img
          :src="require(`/assets/img/${token.symbol}.png`)"
          class="align-self-center mr-3 symbol-image"
        />
        <div class="media-body">
          <h5 class="mb-0">{{ token.price }} <sup>EUR</sup></h5>
          <p
            class="mb-0"
            :class="[
              activeRange.change.isUptrend ? 'text-success' : 'text-danger',
            ]"
          >
            <span>{{ activeRange.change.amount }}</span>
            <span class="text-uppercase"
              >({{ activeRange.change.percents }}%)</span
            >
          </p>
        </div>
      </div>

      <trend :data="graph" :gradient="['#0a84ff']" auto-draw smooth> </trend>
      <button
        v-for="item of ranges"
        :key="item"
        class="btn text-light mr-2"
        :class="{ 'btn-primary': range === item }"
        @click="changeRange(item)"
      >
        {{ item }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['token'],
  data() {
    return {
      range: 'ALL',
      ranges: ['1D', '7D', '1M', '3M', 'YTD', 'ALL'],
    }
  },
  computed: {
    graph() {
      return this.token.priceHistory[this.range].priceData.map(
        (item) => item[1]
      )
    },
    activeRange() {
      return this.token.priceHistory[this.range]
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

h1 {
  font-weight: 500;
  font-size: 21px;
  margin-bottom: 0;
  margin-left: 0.5rem;
}
</style>
