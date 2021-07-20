<template>
  <div class="webpage__create-form">
    <el-form :model="formData" class="webpage__form" ref="formData">
      <div class="webpage__form-block">
        <h1>Customer</h1>
        <el-form-item label="Email" prop="email" required>
          <el-input v-model="formData.email" placeholder="Your email" />
        </el-form-item>
        <el-form-item label="Name" prop="name" required>
          <el-input v-model="formData.name" placeholder="Your name" />
        </el-form-item>
        <el-form-item label="Surname" prop="surname" required>
          <el-input v-model="formData.surname" placeholder="Your surname" />
        </el-form-item>
        <el-form-item label="Phone number" prop="phone" required>
          <el-input v-model="formData.phone" placeholder="Your phone number" />
        </el-form-item>
      </div>
      <div class="webpage__form-block">
        <h1>Order</h1>
        <el-form-item
          v-for="(item, index) in formData.items"
          label="Item"
          :key="item.key"
          :prop="'items.' + index + '.value'"
          required
        >
          <el-input v-model="item.value">
            <template v-if="index" #suffix>
              <el-button type="info" size="mini" icon="el-icon-delete" circle @click.prevent="removeItem(item)" />
            </template>
          </el-input>
        </el-form-item>
        <el-button @click="addItem">
          <b>Add item</b>
        </el-button>
        <el-form-item label="Type" prop="type">
          <el-select v-model="formData.type">
            <el-option label="Retail" value="0" />
            <el-option label="Wholesale" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="Provider" prop="provider">
          <el-select v-model="formData.provider">
            <el-option label="Provider 1" value="0" selected />
            <el-option label="Provider 2" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="Order ID">
          <el-input v-model="formData.id" :disabled="true" />
        </el-form-item>
        <el-form-item label="Order completion date" prop="date" required>
          <el-date-picker v-model="formData.date" type="date" format="dd.MM.yyyy" placeholder="Order date" />
        </el-form-item>
        <el-form-item label="Comment" prop="comment">
          <el-input type="textarea" v-model="formData.comment" placeholder="Your comment" />
        </el-form-item>
      </div>
      <div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">
            Create
          </el-button>
          <el-button @click="resetForm('formData')">
            Reset
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Create",
  data: () => ({
    formData: {
      created: new Date().toLocaleDateString(),
      receiver: "Baranovskaya E. V.",
      email: "",
      name: "",
      surname: "",
      fullName: "",
      phone: "",
      items: [
        {
          key: 1,
          value: "",
        },
      ],
      type: "",
      provider: "",
      id: 0,
      date: "",
      comment: "",
    },
  }),

  methods: {
    ...mapActions('orders', ['postOrder']),
    removeItem(item) {
      var index = this.formData.items.indexOf(item);
      if (index !== -1) {
        this.formData.items.splice(index, 1);
      }
    },
    addItem() {
      this.formData.items.push({
        key: Date.now(),
        value: "",
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async submitForm() {
      this.formData.fullName = this.formData.name + " " + this.formData.surname;
      console.log(this.formData.fullName);
      await this.postOrder(this.formData);
      this.resetForm('formData');
    },
  },
  computed: {
    ...mapState('orders', ['orders']),
  }
};
</script>

<style lang="scss">
.webpage__create-form {
  width: 100%;
  display: flex;
  justify-content: center;

  .webpage__form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;

    h1 {
      box-sizing: border-box;
      width: 100%;
      color: #525252;
      border-bottom: 2px solid lightgray;
    }

    .el-form-item {
      label {
        font-size: 20px;
      }
      .el-select, .el-input {
        width: 100%;
      }
    }
  }
}
</style>
