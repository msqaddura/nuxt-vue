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
    list() {
      return this.token.alerts[this.range]
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
