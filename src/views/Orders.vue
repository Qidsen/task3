<template>
  <div class="webpage__orders">
    <table>
      <thead>
        <tr>
          <td>
            {{ orders }}
          </td>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions('orders', ['getOrder']),
  },
  computed: {
    ...mapState('orders', ['orders']),
  },
  async created() {
    await this.getOrder(this.orders);
    console.log(Object.keys(this.orders).length)
  },
}
</script>

<style lang="scss">
  .webpage__orders {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
