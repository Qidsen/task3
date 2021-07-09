<template>
  <div class="topbar__navigation">
    <table class="topbar__table">
      <thead>
        <td 
          @click="$router.push(lowerCase(item))" 
          v-for="(item, index) in links" 
          :key="index" 
          :class="{ 'webpage__topbar-active': $route.name === lowerCase(item) }">
            {{ changeName(item) }}
        </td>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data: () => ({
    links: [
      'Greetings',
      'Orders',
      'Create',
    ],
  }),

  methods: {
    lowerCase(str) {
      return str.toLowerCase();
    },
    changeName(str) {
      return str.replace("Create", "New Order");
    }
  },
}
</script>

<style lang="scss">
  .topbar__navigation {
    width: 100%;
    box-sizing: border-box;
    display: flex;

    .topbar__table {
      box-sizing: border-box;
      width: 100%;
      display: flex;

      thead {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;

        td {
          box-sizing: border-box;
          width: 100%;
          display: block;
          text-align: center;
          border-bottom: 1px solid lightgray;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          padding: 18px 0;
          font-size: 24px;
          color: blue;
          text-decoration: none;
          cursor: pointer;
        }
        .webpage__topbar-active {
          color: #525252;
          border: 1px solid lightgray;
          border-bottom: none;
        }
      }
    }
  }
</style>