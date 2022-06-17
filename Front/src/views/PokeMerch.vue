<template>
  <img src="@/assets/pokemerch.png" alt="pokemerch" />
  <div class="container">
    <div class="product-card" v-for="data in prod_data" :key="data._id">
      <h3>{{ data.product_name }}</h3>
      <h4>{{ data.type }}</h4>
      <img class="product-image" :src="data.url" alt="data.name" />
      <h5>{{ data.price }}</h5>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prod_data: [],
    };
  },
  mounted() {
    this.showMerch();
  },
  methods: {
    async showMerch() {
      const response = await axios.get("http://localhost:3000/api/buscar");

      this.prod_data = response.data;
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1em;
  margin: 40px;
}
.product-image {
  width: 200px;
}
.product-card {
  background: white;

  border-radius: 20px;
  width: 300px;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
}
</style>