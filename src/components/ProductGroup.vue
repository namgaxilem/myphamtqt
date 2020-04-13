<template>
  <div class="product-group">
    <div v-for="(product, key) in products" :key="key" class="product-container">
      <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" class="product-img" alt="Card image" />
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.price}}</p>
        <a href="#" class="btn btn-success">Mua ngay</a>
      </div>
      <!-- <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGroup",
  props: ["products"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.product-group {
  display: flex;
  flex-wrap: wrap;
}

.product-container {
  color: black;
  margin: 1em;
  width: 185px;
}

.product-img {

}

@media screen and (max-width: 991px) {
  .product-group {
    flex-direction: column;
  }

  .product-container {
    width: auto;
  }
}
</style>