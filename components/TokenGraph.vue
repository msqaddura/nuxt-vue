<template>
  <section>
    <NuxtLink to="/">
      <img :src="require('/assets/icon/back.png')" /> {{ token.name }}
    </NuxtLink>

    <br />
    <br />
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

      <trend :data="graph" :gradient="['#0a84ff']" auto-draw smooth> </trend>
      <button
        v-for="item of ranges"
        :key="item"
        class="btn btn-primary mr-2"
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
