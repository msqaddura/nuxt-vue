<template>
  <div class="jumper">
    <ul class="list-unstyled mb-0">
      <li v-for="(item, index) in list" :key="index" class="media text-white">
        <img
          :src="require(`/assets/img/${token.symbol}.png`)"
          class="align-self-center mr-3 symbol-image"
        />
        <div class="media-body">
          <h5 class="mb-0">
            {{ item.targetPriceEur }} <sup class="text-uppercase">EUR</sup>
          </h5>
          <p class="mb-0 text-secondary">
            <span>({{ item.percentsToChange }} %)</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['token'],
  computed: {
    list() {
      return this.token.alerts
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
