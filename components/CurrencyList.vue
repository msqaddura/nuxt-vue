<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Data</h1>
    <ul>
      <li v-for="item of data" :key="item.name">
        <NuxtLink :to="`/${item.name}`">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
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
