<template>
  <section class="container-fluid">
    <br />
    <Spinner v-if="$fetchState.pending"></Spinner>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul class="list-unstyled">
        <li v-for="item of data" :key="item.name" class="jumper my-3">
          <NuxtLink
            :to="`/${item.name}`"
            class="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none
            "
          >
            <div class="media">
              <img
                :src="require(`/assets/img/${item.symbol}.png`)"
                class="align-self-center mr-3 symbol-image"
              />
              <div class="media-body">
                <h5 class="mb-0">{{ item.name }}</h5>
                <p class="text-light mb-0">
                  <span>{{ item.amount }}</span>
                  <span class="text-uppercase">{{ item.symbol }}</span>
                </p>
              </div>
            </div>
            <div>
              <span>{{ item.amountEur }}</span
              ><sup>EUR</sup>
            </div></NuxtLink
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getCurrencies } from '~/core/domains/currency/currency.client'
export default {
  data() {
    return {
      data: [],
    }
  },
  async fetch() {
    this.data = await getCurrencies()
  },
}
</script>

<style scoped lang="scss">
$size: 32px;
.symbol-image {
  width: $size;
  height: $size;
}
</style>
