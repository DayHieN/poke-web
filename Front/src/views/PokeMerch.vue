<template>
  <div v-for="(data, index) in prod_data" :key="index">
    <h1>{{ data.product_name }}</h1>
    <h2>{{ data.type }}</h2>
    <h3>{{ data.price }}</h3>
    <img :src="require(`${data.url}`)" />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      prod_data: {
        url: "",
        product_name: "",
        type: "",
        price: "",
      },
    };
  },
  created() {
    this.showMerch();
    console.log(this.prod_data);
  },
  methods: {
    async showMerch() {
      await axios
        .get("http://localhost:3000/api/buscar")
        .then((response) => {
          this.prod_data.product_name = response.data.product_name;
          this.prod_data.type = response.data.type;
          this.prod_data.price = response.data.price;
          this.prod_data.url = response.data.url;
        })
        .catch((e) => {
          console.log("error " + e);
        });
    },
  },
};
</script>
<style lang="">
</style>