<template>
  <div class="trangchu">
    <h4>Giới thiệu shop</h4>
    <p>
      Shop Mỹ Phẩm Tóc Online TQT được hình thành và phát triển
      cùng với công nghệ phát triển. 
      <br />
      Dựa vào nhu cầu...
    </p>
    <p> 
      Chuyên các sản phẩm ngành tóc như: 
      <ul> 
        <li>thuốc uốn, ép</li>
        <li>thuốc nhuộm...</li>
        <li>...</li>
      </ul>
    </p>
    <p>
      Địa chỉ: 331 đường Vườn Lài, phường An Phú Đông, Quận 12, Thành phố Hồ Chí Minh
    </p>
    <p>
      Số điện thoại / Zalo: 0332 76 8494   
    </p>
    <!-- <h4>CÁC SẢN PHẨM CHUYÊN DỤNG CHO SALON</h4>
    <ProductGroup title="THUỐC UỐN" />
    <ProductGroup title="THUỐC DUỖI" /> -->
  </div>
</template>

<script>
// import ProductGroup from "../components/ProductGroup.vue";
// import ProductGroupRight from "../components/ProductGroupRight.vue";

export default {
  name: "HomePage",
  components: {
    // ProductGroup,
    // ProductGroupRight
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

.trangchu {
  text-align: left;
  line-height: 2.5em;

  h4 {
    text-decoration: underline;
  }
}
</style>
