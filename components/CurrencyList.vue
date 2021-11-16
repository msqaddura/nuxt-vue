<template>
  <section class="container-fluid">
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul class="list-unstyled">
        <li v-for="item of data" :key="item.name" class="jumper media my-3">
          <NuxtLink
            :to="`/${item.name}`"
            class="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none
              w-100
            "
          >
            <div class="media">
              <img
                :src="require(`/assets/img/${item.symbol}.png`)"
                class="align-self-center mr-3"
              />
              <div class="media-body">
                <h5 class="mt-0">{{ item.name }}</h5>
                <p>
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
.media img {
  width: $size;
  height: $size;
}
</style>
