<template>
  <div class="webpage__orders">
    <el-table
      :data="orders"
      style="width: 100%">
      <el-table-column
        prop="created"
        label="Date"
        width="90">
      </el-table-column>
      <el-table-column
        prop="receiver"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="120">
      </el-table-column>
      <el-table-column
        prop="fullName"
        label="Customer"
        width="180">
      </el-table-column>
      <el-table-column
        prop="provider"
        label="Provider"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="Completed"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    status: ['New', 'Waiting', 'Expired', 'Failed', 'Finished'],
  }),
  methods: {
    ...mapActions('orders', ['getOrder']),
  },
  computed: {
    ...mapState('orders', ['orders']),
  },
  async created() {
    await this.getOrder(this.orders);
    console.log(this.orders);
  },
}
</script>

<style lang="scss">
  .webpage__orders {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;

    .el-table {
      box-sizing: border-box;
      width: 100%;
      max-width: 1400px;
      border: 1px solid lightgray;
    }
  }
</style>
