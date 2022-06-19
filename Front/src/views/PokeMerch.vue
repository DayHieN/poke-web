<template>
  <img src="@/assets/pokemerch.png" alt="pokemerch" />
  <div class="select">
    <ul>
      <li @click="select('all')">Todo</li>
      <li @click="select('Clothes')">Ropa</li>
      <li @click="select('Pins')">Pins</li>
      <li @click="select('Games')">Juegos</li>
    </ul>
  </div>
  <div class="container">
    <div
      @click="sendInfo(data)"
      class="product-card fade-in"
      v-for="data in prods"
      :key="data._id"
    >
      <h3>{{ data.product_name }}</h3>
      <h4>{{ data.type }}</h4>
      <img class="product-image" :src="data.url" alt="data.name" />
      <h5>{{ data.price }}</h5>
    </div>
  </div>
  <MerchModal @click="hideModal" :prod_info="productsInfo" :class="modalShow" />
</template>


<script>
import axios from "axios";
import MerchModal from "@/components/PokeMerch/MerchModal.vue";
export default {
  components: {
    MerchModal,
  },
  data() {
    return {
      prods: [],
      prods2: [],
      selected: [],
      productsInfo: [],
      modalShow: "modal modal-close-modal",
    };
  },
  mounted() {
    this.showMerch();
  },
  methods: {
    async showMerch() {
      const response = await axios.get("http://localhost:3000/api/buscar");
      this.prods = response.data;
      this.prods2 = response.data;
      console.log(this.prods2);
    },
    select(type) {
      if (type == "all") {
        type = "";
        this.prods = this.prods2;
      }
      if (type != "") {
        let res = this.prods2.filter((prod) => prod.type == type);
        console.log(type, res);
        this.prods = this.prods2;
        this.selected = res;
        this.prods = this.selected;
      } else {
        this.prods = this.prods2;
      }
    },
    sendInfo(prodInfo) {
      this.showModal();
      console.log(prodInfo);
      this.productsInfo = prodInfo;
    },
    hideModal() {
      this.modalShow = "modal modal-close-modal";
    },
    showModal() {
      this.modalShow = "modal modal-show";
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1.5em;
  margin: 45px;
}
.product-image {
  width: 200px;
}
.product-card {
  cursor: pointer;

  background: white;

  border-radius: 20px;
  width: 300px;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.51);

  transition: 0.3s;
}

.product-card:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

ul li {
  cursor: pointer;
  display: inline;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 25px;
  padding-left: 25px;
  margin: 10px;
  background: chocolate;
  color: white;
  border-radius: 20px;
  height: 10px;
  transition: 0.3s;
}
ul li:hover {
  background: white;
  color: chocolate;
  transition: 0.3s;
  font-weight: bold;
}

ul li:focus {
  background: white;
  color: chocolate;
  transition: 0.3s;
}
</style>