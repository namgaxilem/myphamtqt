<template>
  <header>
    <b-row>
      <b-col lg="2" md="12"></b-col>
      <b-col lg="8" md="12">
        <div class="banner">
          <!-- <img src="@/assets/images/banner.png" /> -->
          <h1>Shop Mỹ Phẩm Tóc Online</h1>
          <h1>TQT</h1>
          <h1>Chuyên cung cấp sỉ, lẻ các loại mỹ phẩm tóc</h1>
          <h1>Call/Zalo: 0332 76 8494</h1>
        </div>
      </b-col>
      <b-col lg="2" md="12"></b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  border: 1px solid black;
}

img {
  width: 100%;
  max-height: 400px;
}
</style>
