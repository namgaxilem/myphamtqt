<template>
  <div>
    <div class="card">
      <h5 class="card-header">{{title}}</h5>
      <div class="card-body">
          <div class="product-container">
            <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
            <h6>Thuoc nhuon toc han quoc</h6>
            <p>200.000</p>
          </div>
          <div class="product-container">
            <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
            <h6>Thuoc nhuon toc han quoc</h6>
            <p>200.000</p>
          </div>
          <div class="product-container">
            <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
            <h6>Thuoc nhuon toc han quoc</h6>
            <p>200.000</p>
          </div>
          <div class="product-container">
            <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
            <h6>Thuoc nhuon toc han quoc</h6>
            <p>200.000</p>
          </div>
          <div class="product-container">
            <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
            <h6>Thuoc nhuon toc han quoc</h6>
            <p>200.000</p>
          </div>
          <div class="product-container">
            <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
            <h6>Thuoc nhuon toc han quoc</h6>
            <p>200.000</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGroupRight",
  props: [ "title" ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border-radius: 10px;
  margin-bottom: 1em;

  .card-header {
    background-color: green;
    color: #fff;
    font-weight: bold;
  }
}

.product-container {
  border-bottom: 1px dotted red;
  img {
    object-fit: contain;
    width: 100%;
    max-height: 70px;
  }
}

.card-body {
  max-height: 200px;
  overflow: hidden auto;
}
</style>